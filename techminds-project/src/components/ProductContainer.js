import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductList from './ProductList';
import { getProducts, priceChange } from './actions';

const ProductContainer = (props) => {
    useEffect(() => {
        props.dispatch(getProducts());        
    }, []); 

    return (
        <div className="container">
            <ProductList products={props.products} />
        </div>
    )
    
}
const mapStateToProps = store => ({
    products: store.getProducts.products 
});

export default connect(mapStateToProps)(ProductContainer);