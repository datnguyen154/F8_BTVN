import { Outlet } from "react-router";
import AdminSidebar from "./components/AdminSidebar";
import AdminFooter from "./components/AdminFooter";
import styles from "./AdminLayout.module.scss";

function AdminLayout() {
    return (
        <div className={styles.layout}>
            <AdminSidebar />

            <div className={styles.content}>
                <header className={styles.header}>
                    <h2>Admin Panel</h2>
                </header>

                <main className={styles.main}>
                    <Outlet />
                </main>

                <AdminFooter />
            </div>
        </div>
    );
}

export default AdminLayout;
