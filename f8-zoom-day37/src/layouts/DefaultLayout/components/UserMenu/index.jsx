import { useState } from "react";
import { Link } from "react-router";
import styles from "./UserMenu.module.scss";

function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.wrapper}>
            <button className={styles.user} onClick={() => setIsOpen(!isOpen)}>
                <img
                    src="https://ui-avatars.com/api/?name=User&background=random"
                    alt="User"
                />

                <span>Nguyễn Xuân Đạt</span>
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    <Link to="/profile">Trang cá nhân</Link>
                    <button>Cài đặt</button>
                    <button>Đăng xuất</button>
                </div>
            )}
        </div>
    );
}

export default UserMenu;
