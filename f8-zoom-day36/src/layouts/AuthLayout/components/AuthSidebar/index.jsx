import { NavLink } from "react-router";
import styles from "./AuthSidebar.module.scss";

function AuthSidebar() {
    return (
        <aside className={styles.sidebar}>
            <NavLink to="/login">Đăng nhập</NavLink>
            <NavLink to="/register">Đăng ký</NavLink>
            <a href="#">Quên mật khẩu</a>
        </aside>
    );
}

export default AuthSidebar;
