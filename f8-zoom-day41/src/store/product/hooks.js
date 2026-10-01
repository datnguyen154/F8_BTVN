import { useSelector } from "react-redux";

import { getProductDetail, getProducts } from "./selectors";

export function useProducts() {
    return useSelector(getProducts);
}

export function useProductDetail() {
    return useSelector(getProductDetail);
}
