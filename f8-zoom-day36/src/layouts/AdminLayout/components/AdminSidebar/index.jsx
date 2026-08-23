import { NavLink } from "react-router";
import styles from "./AdminSidebar.module.scss";

function AdminSidebar() {
    return (
        <aside className={styles.sidebar}>
            <h2>Admin</h2>

            <NavLink to="/admin">Dashboard</NavLink>
            <NavLink to="/admin/users">Quản lý Users</NavLink>
            <NavLink to="/admin/settings">Cài đặt</NavLink>
        </aside>
    );
}

export default AdminSidebar;
