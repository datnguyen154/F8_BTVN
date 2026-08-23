import { Outlet } from "react-router";
import Header from "../components/Header";
import AuthSidebar from "./components/AuthSidebar";
import styles from "./AuthLayout.module.scss";

function AuthLayout() {
    return (
        <div className={styles.layout}>
            <Header />

            <div className={styles.content}>
                <AuthSidebar />

                <main className={styles.main}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default AuthLayout;
