import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getList, useProducts } from "../../store/product";

import ProductCard from "../../components/ProductCard";

import styles from "./ProductList.module.scss";

function ProductList() {
    const dispatch = useDispatch();

    const products = useProducts();

    useEffect(() => {
        dispatch(getList());
    }, [dispatch]);

    return (
        <div className={styles.page}>
            <h1>Products</h1>

            {products.length === 0 ? (
                <p>Không có sản phẩm nào.</p>
            ) : (
                <div className={styles.grid}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProductList;
