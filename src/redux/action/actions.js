import { ADD_PRODUCT, REMOVE_PRODUCT } from "../actionTypes/shoppingType";

export const addProduct = (pid) => {
    return {
        type: ADD_PRODUCT,
        payload: pid,
    };
};

export const removeProduct = (pid) => {
    return {
        type: REMOVE_PRODUCT,
        payload: pid,
    };
};