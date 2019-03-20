export const OPTION_CHANGE = 'OPTION_CHANGE';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const getProducts = () => {
    return {
        type: GET_PRODUCTS        
    };
}

export const optionHandler = (productId, priceModified) => {
    return {
        type: OPTION_CHANGE,
        productId,
        priceModified
    };
}

export const addProduct = (id, key) => {
    return {
        type: ADD_PRODUCT,
        id,
        key
    };
}

export const deleteProduct = (key) => {
    return {
        type: DELETE_PRODUCT,
        key
    };
}