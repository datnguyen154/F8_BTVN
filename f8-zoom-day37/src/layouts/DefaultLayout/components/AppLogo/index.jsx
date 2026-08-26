import { Link } from "react-router";
import styles from "./AppLogo.module.scss";
import logo from "../../../../assets/images/f8-logo.png";

function AppLogo() {
    return (
        <Link to="/" className={styles.logo}>
            <img src={logo} alt="F8 Logo" />

            <span>HỌC LẬP TRÌNH ĐỂ ĐI LÀM</span>
        </Link>
    );
}

export default AppLogo;
