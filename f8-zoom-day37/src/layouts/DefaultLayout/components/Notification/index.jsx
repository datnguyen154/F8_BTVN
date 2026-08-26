import { useState } from "react";
import styles from "./Notification.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function Notification() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.wrapper}>
            <button
                className={styles.notificationButton}
                onClick={() => setIsOpen(!isOpen)}
            >
                <FontAwesomeIcon icon={faBell} />
                <span>3</span>
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    <h3>Thông báo</h3>

                    <p>Bài học ReactJS mới đã được cập nhật.</p>
                    <p>Khóa học JavaScript có bài tập mới.</p>
                    <p>Bài tập Day 42 đã được giao</p>
                </div>
            )}
        </div>
    );
}

export default Notification;
