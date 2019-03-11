export const PRICE_CHANGE = 'PRICE_CHANGE';
export const GET_PRODUCTS = 'GET_PRODUCTS'

export const getProducts = () => {
    return {
        type: GET_PRODUCTS        
    };
}

export const priceChange = (e, key) => {
    return {
        type: PRICE_CHANGE,
        key, 
        price: e.target.value
    };
}