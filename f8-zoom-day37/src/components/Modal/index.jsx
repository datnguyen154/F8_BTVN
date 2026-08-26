import { useEffect, useState } from "react";
import styles from "./Modal.module.scss";

function Modal({
    isOpen,
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
}) {
    const [isMounted, setIsMounted] = useState(isOpen);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        let timer;

        if (isOpen) {
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
    }, [isOpen, isMounted, closeTimeoutMS, onAfterOpen, onAfterClose]);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        document.body.classList.add(bodyOpenClassName);
        document.documentElement.classList.add(htmlOpenClassName);

        const handleKeyDown = (e) => {
            if (e.key === "Escape" && shouldCloseOnEsc) {
                onRequestClose?.();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.classList.remove(bodyOpenClassName);
            document.documentElement.classList.remove(htmlOpenClassName);

            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        isOpen,
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
            onRequestClose?.();
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
}

export default Modal;
