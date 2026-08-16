import { useEffect, useState } from "react";

import styles from "./Products.module.scss";

function Product() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className={styles.loading}>Đang tải...</p>;
    }

    return (
        <div className={styles.container}>
            <h1>Products</h1>

            <ul className={styles.productList}>
                {products.map((product) => (
                    <li className={styles.productCard} key={product.id}>
                        <p className={styles.productId}>ID: {product.id}</p>

                        <h2>
                            {product.title.charAt(0).toUpperCase() +
                                product.title.slice(1)}
                        </h2>

                        <p>
                            {product.body.length > 100
                                ? product.body.slice(0, 100) + "..."
                                : product.body}
                        </p>

                        <button onClick={() => setSelectedProduct(product)}>
                            Xem chi tiết
                        </button>
                    </li>
                ))}
            </ul>

            {selectedProduct && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <h2>
                            {selectedProduct.title.charAt(0).toUpperCase() +
                                selectedProduct.title.slice(1)}
                        </h2>

                        <p>{selectedProduct.body}</p>

                        <button onClick={() => setSelectedProduct(null)}>
                            Đóng
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Product;
