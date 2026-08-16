import { NavLink } from "react-router";
import styles from "../Navigation/Navigation.module.scss";

function Navigation() {
    const getClassName = ({ isActive }) =>
        isActive ? `${styles.link} ${styles.active}` : styles.link;

    return (
        <nav className={styles.navigation}>
            <NavLink to="/" className={getClassName}>
                Home
            </NavLink>

            <NavLink to="/counter" className={getClassName}>
                Counter
            </NavLink>

            <NavLink to="/todo" className={getClassName}>
                Todo
            </NavLink>

            <NavLink to="/profile" className={getClassName}>
                Profile
            </NavLink>

            <NavLink to="/products" className={getClassName}>
                Products
            </NavLink>

            <NavLink to="/comments" className={getClassName}>
                Comments
            </NavLink>

            <NavLink to="/weather" className={getClassName}>
                Weather
            </NavLink>

            <NavLink to="/buttons" className={getClassName}>
                Buttons
            </NavLink>
        </nav>
    );
}

export default Navigation;
