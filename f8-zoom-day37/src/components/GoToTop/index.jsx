import { useEffect, useState } from "react";
import styles from "./GoToTop.module.scss";

function GoToTop() {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 300) {
                setIsShow(true);
            } else {
                setIsShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleGoToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`${styles.goToTop} ${
                isShow ? styles.show : ""
            }`}
            onClick={handleGoToTop}
            aria-label="Go to top"
        >
            ↑
        </button>
    );
}

export default GoToTop;