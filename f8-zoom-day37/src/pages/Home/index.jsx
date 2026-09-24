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

                    <Link className={styles.card} to="/performance-demo">
                        <span className={styles.icon}>⚡</span>

                        <div>
                            <h3>Performance Demo</h3>
                            <p>Thực hành React.memo và useCallback.</p>
                        </div>

                        <span className={styles.arrow}>→</span>
                    </Link>

                    <Link className={styles.card} to="/focus-demo">
                        <span className={styles.icon}>⌨</span>

                        <div>
                            <h3>Focus Demo</h3>
                            <p>
                                Thực hành useRef, forwardRef và
                                useImperativeHandle.
                            </p>
                        </div>

                        <span className={styles.arrow}>→</span>
                    </Link>

                    <Link className={styles.card} to="/hoc-demo">
                        <span className={styles.icon}>⚙</span>

                        <div>
                            <h3>HOC Demo</h3>
                            <p>Thực hành Higher-Order Component với loading.</p>
                        </div>

                        <span className={styles.arrow}>→</span>
                    </Link>

                    <Link className={styles.card} to="/render-props-demo">
                        <span className={styles.icon}>↔</span>

                        <div>
                            <h3>Render Props Demo</h3>
                            <p>Thực hành Render Props với DataFetcher.</p>
                        </div>

                        <span className={styles.arrow}>→</span>
                    </Link>
                    <Link className={styles.card} to="/custom-hooks-demo">
                        <span className={styles.icon}>🪝</span>

                        <div>
                            <h3>Custom Hooks Demo</h3>
                            <p>Thực hành useApi và useToggle.</p>
                        </div>

                        <span className={styles.arrow}>→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;
