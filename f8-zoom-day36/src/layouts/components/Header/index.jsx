import { NavLink } from "react-router";
import styles from "./Header.module.scss";

function Header() {
    return (
        <header className={styles.header}>
            <h2>F8 Day 36</h2>

            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? styles.active : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/privacy">Privacy</NavLink>
            </nav>
        </header>
    );
}

export default Header;
