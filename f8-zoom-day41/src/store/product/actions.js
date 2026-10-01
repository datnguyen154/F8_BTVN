import { http } from "../../utils/http";

import { GET_DETAIL, GET_LIST, SET_DETAIL, SET_LIST } from "./constants";

import { hideLoading, showLoading } from "../ui";

export function setList(products) {
    return {
        type: SET_LIST,
        payload: products,
    };
}

export function setDetail(product) {
    return {
        type: SET_DETAIL,
        payload: product,
    };
}

export function getList() {
    return async (dispatch) => {
        dispatch({
            type: GET_LIST,
        });

        dispatch(showLoading());

        try {
            const data = await http.get("/products");

            dispatch(setList(data.items || data));
        } catch (error) {
            console.error("Get products error:", error.message);
        } finally {
            dispatch(hideLoading());
        }
    };
}

export function getDetail(slug) {
    return async (dispatch) => {
        dispatch({
            type: GET_DETAIL,
        });

        dispatch(showLoading());

        try {
            const data = await http.get(`/products/${slug}`);

            dispatch(setDetail(data));
        } catch (error) {
            console.error("Get product detail error:", error.message);
        } finally {
            dispatch(hideLoading());
        }
    };
}
