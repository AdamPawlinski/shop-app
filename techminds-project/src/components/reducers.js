import { combineReducers } from 'redux';
import { GET_PRODUCTS, PRICE_CHANGE } from './actions';
import products from './products';

const initialState = {
    products: products,
    price: products.price
}

const getProducts = (state = initialState, action) => {
    switch (action.type) {
        case (GET_PRODUCTS):
            return Object.assign({}, state, {products: state.products})

        default:
            return state;
    }
}

const priceChange = (state = initialState, action) => {
    switch (action.type) {
        case PRICE_CHANGE:
                return state + action.price;            
        default:
            return state
    }
}

const reducers = combineReducers({
    getProducts,
    priceChange
})

export default reducers;