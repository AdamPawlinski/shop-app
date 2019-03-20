import { combineReducers } from 'redux';
import { GET_PRODUCTS, OPTION_CHANGE, ADD_PRODUCT, DELETE_PRODUCT } from './actions';
import products from './products';
import {reducer as formReducer } from 'redux-form';

const initialState = {
    products: products,
    basketProducts: [] 
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return Object.assign({}, state, {products: state.products});

        case OPTION_CHANGE:

            // const currentOptionValue = {
            //     name: action.optionName,
            //     value: action.optionChanged,
            //     priceModifier: action.priceModifier
            // };
            // const currentOptionValue = Object.defineProperty(productChanged, 'currentOption', {
            //     value: {
            //         name: action.optionName,
            //         value: action.optionChanged,
            //         priceModifier: action.priceModifier
            //     }
            // });
            
            const id = action.productId - 1;
            // const productChanged = {
            //     ...state.products.item[id],
            //     action.priceModified
            // }
            return {...state, products: 
                state.products.map((item, index) => {
                    if (index !== id) {
                        return item
                    } else {
                    return {
                        ...item,
                        ...action.priceModified
                    }}
                })
            }
            
            // {...state, 
            //     products: [
            //         ...state.products,
            //         products[id]  {
            //             ...state.products[id],
            //             price: action.priceModified
            //         }
            //     ]
            // }
            
            // Object.assign({}, ...state, {currentOptionValue});
                
            // return optionChanged.currentValue: action.priceModifier;
            // const productChanged = state.products.filter(item => item.id === action.id);
            // const changedProduct = state.products.find(item => item.id === action.id);  
            // changedProduct = state.products.options.values.map(i => i === action.optionValue).name;          
            // changedProduct = changedProduct.price + priceModifier;
            // const productChanged = products.splice((action.id-1), 1, action.product);
            // return {...state, products: productChanged};

        case ADD_PRODUCT: 
            let addedProduct = state.products.find(item => item.id === action.id)
            addedProduct = Object.assign({}, addedProduct, {key: action.key});
            return {...state, basketProducts: [...state.basketProducts, addedProduct]}; 

        case DELETE_PRODUCT:
            const productsNotDeleted = state.basketProducts.filter(item => item.key !== action.key);
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
    productReducer,
    form: formReducer
})

export default reducers;