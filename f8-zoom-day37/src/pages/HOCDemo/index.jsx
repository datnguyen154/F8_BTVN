import { useState } from "react";

import UserProfile from "../../components/UserProfile";
import ProductList from "../../components/ProductList";

import styles from "./HOCDemo.module.scss";

function HOCDemo() {
    const [userLoading, setUserLoading] = useState(true);
    const [productLoading, setProductLoading] = useState(true);

    return (
        <div className={styles.page}>
            <h1>HOC Demo</h1>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <h2>User</h2>

                    <button onClick={() => setUserLoading((prev) => !prev)}>
                        Toggle User Loading
                    </button>

                    <div className={styles.content}>
                        <UserProfile isLoading={userLoading} />
                    </div>
                </div>

                <div className={styles.card}>
                    <h2>Products</h2>

                    <button onClick={() => setProductLoading((prev) => !prev)}>
                        Toggle Product Loading
                    </button>

                    <div className={styles.content}>
                        <ProductList isLoading={productLoading} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HOCDemo;
