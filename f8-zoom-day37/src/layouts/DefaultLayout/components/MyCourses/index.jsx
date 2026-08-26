import { useState } from "react";
import styles from "./MyCourses.module.scss";

function MyCourses() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.wrapper}>
            <button onClick={() => setIsOpen(!isOpen)}>Khóa học của tôi</button>

            {isOpen && (
                <div className={styles.dropdown}>
                    <h3>Khóa học của tôi</h3>

                    <div>Fullstack Web</div>
                    <div>JavaScript Pro</div>
                    <div>Tailwind CSS</div>
                </div>
            )}
        </div>
    );
}

export default MyCourses;
