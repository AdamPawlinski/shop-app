import { combineReducers } from 'redux';
import { GET_PRODUCTS, CURRENT_PRODUCT_STATE, ADD_PRODUCT, DELETE_PRODUCT } from './actions';
import products from './products';

const initialState = {
    products: products,
    option: 0,
    basketProducts: [] 
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return Object.assign({}, state, {products: state.products});

        case CURRENT_PRODUCT_STATE:
            // const productChanged = state.products.filter(item => item.id === action.id);
            // const changedProduct = state.products.find(item => item.id === action.id);  
            // changedProduct = state.products.options.values.map(i => i === action.optionValue).name;          
            // changedProduct = changedProduct.price + priceModifier;
            const productChanged = products.splice((action.id-1), 1, action.product);
            return {...state, products: productChanged};

        case ADD_PRODUCT:   
            const addedProduct = state.products.find(item => item.id === action.id);
            return {...state, basketProducts: [...state.basketProducts, addedProduct]}; 

        case DELETE_PRODUCT:
            const productsNotDeleted = state.basketProducts.filter(item => item.id !== action.id);
            return {...state, basketProducts: productsNotDeleted};

        default:
            return state;
    }
}

//     if (action.type === GET_PRODUCTS) {
//         return Object.assign({}, state, {products: state.products})
//     }
//     return state;
// }

// const optionChange = (state = initialState, action) => {
//     if (action.type === OPTION_CHANGE) {        
//         return state.optionChange.products = action.optionChangeValue;   
//     }    
//     return state;    
// }

// const basketContent = (state = initialState, action) => {
//     // eslint-disable-next-line default-case
//     switch (action.type) {
//         case ADD_PRODUCT:   
//             const addedProduct = products.find(item => item.id === action.id);            
//             return state.basketProducts = [...state.basketProducts, addedProduct];       
//             // return Object.assign({}, state.basketContent.basketProducts, action.product);
//         case DELETE_PRODUCT:
//             const productsNotDeleted = state.basketProducts.filter(id => [id] !== action.productId);
//             return state.basketProducts = productsNotDeleted;
//     }
//     return state;
// }


const reducers = combineReducers({
    productReducer
})

export default reducers;