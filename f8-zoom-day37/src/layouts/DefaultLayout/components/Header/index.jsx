import AppLogo from "../AppLogo";
import SearchForm from "../SearchForm";
import MyCourses from "../MyCourses";
import Notification from "../Notification";
import UserMenu from "../UserMenu";

import styles from "./Header.module.scss";

function Header() {
    return (
        <header className={styles.header}>
            <AppLogo />

            <SearchForm />

            <div className={styles.actions}>
                <MyCourses />
                <Notification />
                <UserMenu />
            </div>
        </header>
    );
}

export default Header;
