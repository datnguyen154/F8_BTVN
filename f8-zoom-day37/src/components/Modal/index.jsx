import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

import styles from "./Modal.module.scss";

const Modal = forwardRef(function Modal(
    {
        isOpen = false,
        onAfterOpen,
        onAfterClose,
        onRequestClose,

        closeTimeoutMS = 0,

        overlayClassName = "",
        className = "",

        bodyOpenClassName = "modal-open",
        htmlOpenClassName = "modal-open",

        shouldCloseOnOverlayClick = true,
        shouldCloseOnEsc = true,

        children,
    },
    ref,
) {
    const [isMounted, setIsMounted] = useState(isOpen);
    const [isClosing, setIsClosing] = useState(false);
    const [imperativeOpen, setImperativeOpen] = useState(false);

    const actualIsOpen = isOpen || imperativeOpen;

    const handleRequestClose = () => {
        setImperativeOpen(false);
        onRequestClose?.();
    };

    useImperativeHandle(ref, () => ({
        open() {
            setImperativeOpen(true);
        },

        close() {
            handleRequestClose();
        },

        toggle() {
            if (actualIsOpen) {
                handleRequestClose();
            } else {
                setImperativeOpen(true);
            }
        },
    }));

    useEffect(() => {
        let timer;

        if (actualIsOpen) {
            timer = setTimeout(() => {
                setIsMounted(true);
                setIsClosing(false);

                onAfterOpen?.();
            }, 0);
        } else if (isMounted) {
            timer = setTimeout(() => {
                setIsClosing(true);
            }, 0);

            const closeTimer = setTimeout(() => {
                setIsMounted(false);
                setIsClosing(false);

                onAfterClose?.();
            }, closeTimeoutMS);

            return () => {
                clearTimeout(timer);
                clearTimeout(closeTimer);
            };
        }

        return () => clearTimeout(timer);
    }, [actualIsOpen, isMounted, closeTimeoutMS, onAfterOpen, onAfterClose]);

    useEffect(() => {
        if (!actualIsOpen) {
            return;
        }

        document.body.classList.add(bodyOpenClassName);
        document.documentElement.classList.add(htmlOpenClassName);

        const handleKeyDown = (e) => {
            if (e.key === "Escape" && shouldCloseOnEsc) {
                handleRequestClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.classList.remove(bodyOpenClassName);
            document.documentElement.classList.remove(htmlOpenClassName);

            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        actualIsOpen,
        bodyOpenClassName,
        htmlOpenClassName,
        shouldCloseOnEsc,
        onRequestClose,
    ]);

    if (!isMounted) {
        return null;
    }

    const handleOverlayClick = () => {
        if (shouldCloseOnOverlayClick) {
            handleRequestClose();
        }
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div
            className={`
                ${styles.overlay}
                ${isClosing ? styles.overlayClosing : styles.overlayOpen}
                ${overlayClassName}
            `}
            onClick={handleOverlayClick}
        >
            <div
                className={`
                    ${styles.modal}
                    ${isClosing ? styles.modalClosing : styles.modalOpen}
                    ${className}
                `}
                onClick={handleModalClick}
            >
                {children}
            </div>
        </div>
    );
});

export default Modal;
