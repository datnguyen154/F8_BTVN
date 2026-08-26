import { Outlet } from "react-router";
import Header from "./components/Header";

import styles from "./DefaultLayout.module.scss";

function DefaultLayout() {
    return (
        <div className={styles.layout}>
            <Header />

            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
}

export default DefaultLayout;
