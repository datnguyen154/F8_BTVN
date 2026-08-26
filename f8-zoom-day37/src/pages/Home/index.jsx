import { Link } from "react-router";
import styles from "./Home.module.scss";

function Home() {
    return (
        <div className={styles.home}>
            <section className={styles.hero}>
                <span className={styles.badge}>F8 React Practice</span>

                <h1>React Component Practice</h1>

                <p>
                    Thực hành xây dựng layout, modal, upload avatar và Go To Top
                    component.
                </p>
            </section>

            <section className={styles.demoSection}>
                <h2>Demo bài tập</h2>

                <div className={styles.cards}>
                    <Link className={styles.card} to="/profile">
                        <span className={styles.icon}>👤</span>

                        <div>
                            <h3>Profile</h3>
                            <p>Upload avatar và preview ảnh.</p>
                        </div>

                        <span className={styles.arrow}>→</span>
                    </Link>

                    <Link className={styles.card} to="/modal-demo">
                        <span className={styles.icon}>▣</span>

                        <div>
                            <h3>Modal Demo</h3>
                            <p>Test các trường hợp của Modal component.</p>
                        </div>

                        <span className={styles.arrow}>→</span>
                    </Link>

                    <Link className={styles.card} to="/scroll-demo">
                        <span className={styles.icon}>↑</span>

                        <div>
                            <h3>Scroll Demo</h3>
                            <p>Scroll detection và Go To Top button.</p>
                        </div>

                        <span className={styles.arrow}>→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;
