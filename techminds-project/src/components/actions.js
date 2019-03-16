export const CURRENT_PRODUCT_STATE = 'CURRENT_PRODUCT_STATE';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const getProducts = () => {
    return {
        type: GET_PRODUCTS        
    };
}

export const currentProductState = (optionValue, id) => {
    return {
        type: CURRENT_PRODUCT_STATE,
        id,
        optionValue
    };
}

export const addProduct = (id) => {
    return {
        type: ADD_PRODUCT,
        id
    };
}

export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        id
    };
}