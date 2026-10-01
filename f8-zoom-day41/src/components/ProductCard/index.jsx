import { Link } from "react-router";

import styles from "./ProductCard.module.scss";

function ProductCard({ product }) {
    return (
        <Link to={`/products/${product.slug}`} className={styles.card}>
            {product.image && (
                <img
                    className={styles.image}
                    src={product.image}
                    alt={product.name || product.title}
                />
            )}

            <div className={styles.content}>
                <h2>{product.name || product.title}</h2>

                {product.price !== undefined && (
                    <p className={styles.price}>{product.price}</p>
                )}
            </div>
        </Link>
    );
}

export default ProductCard;
