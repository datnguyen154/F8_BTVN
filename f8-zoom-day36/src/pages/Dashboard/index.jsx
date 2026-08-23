import styles from "./Dashboard.module.scss";

function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <h1>Dashboard</h1>

            <div className={styles.cards}>
                <div className={styles.card}>
                    <h3>Người dùng</h3>
                    <p>120</p>
                </div>

                <div className={styles.card}>
                    <h3>Bài viết</h3>
                    <p>100</p>
                </div>

                <div className={styles.card}>
                    <h3>Lượt truy cập</h3>
                    <p>1,520</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
