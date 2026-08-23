import { Link } from "react-router";
import styles from "./Footer.module.scss";

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© 2026 F8 React Day 36</p>

            <div className={styles.links}>
                <Link to="/contact">Contact</Link>
                <Link to="/privacy">Privacy</Link>
            </div>
        </footer>
    );
}

export default Footer;
