import { Link } from "react-router";
import styles from "./Home.module.scss";

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <div className={styles.hero}>
                    <h1>Chào mừng đến với F8 React Day 35</h1>

                    <p>
                        Tổng hợp các bài tập React với Vite, React Router và CSS
                        Module.
                    </p>
                </div>

                <ul className={styles.pageList}>
                    <li className={styles.pageItem}>
                        <Link to="/counter">Counter App</Link>
                    </li>

                    <li className={styles.pageItem}>
                        <Link to="/todo">Todo List</Link>
                    </li>

                    <li className={styles.pageItem}>
                        <Link to="/profile">Profile Card</Link>
                    </li>

                    <li className={styles.pageItem}>
                        <Link to="/products">Product List</Link>
                    </li>

                    <li className={styles.pageItem}>
                        <Link to="/comments">Comment System</Link>
                    </li>

                    <li className={styles.pageItem}>
                        <Link to="/weather">Weather App</Link>
                    </li>

                    <li className={styles.pageItem}>
                        <Link to="/buttons">Button Components</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
