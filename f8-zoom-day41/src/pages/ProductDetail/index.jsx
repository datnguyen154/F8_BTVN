import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { useDispatch } from "react-redux";

import { getDetail, useProductDetail } from "../../store/product";

import styles from "./ProductDetail.module.scss";

function ProductDetail() {
    const { slug } = useParams();

    const dispatch = useDispatch();

    const product = useProductDetail();

    useEffect(() => {
        dispatch(getDetail(slug));
    }, [dispatch, slug]);

    if (!product) {
        return null;
    }

    return (
        <div className={styles.page}>
            <Link to="/products" className={styles.backLink}>
                ← Back to Products
            </Link>

            <div className={styles.detail}>
                {product.image && (
                    <img
                        className={styles.image}
                        src={product.image}
                        alt={product.name || product.title}
                    />
                )}

                <div className={styles.content}>
                    <h1>{product.name || product.title}</h1>

                    {product.price !== undefined && (
                        <p className={styles.price}>{product.price}</p>
                    )}

                    {product.description && (
                        <p className={styles.description}>
                            {product.description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
