import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductList from './ProductList';
import { getProducts } from './actions';
import '../styles/productcontainer.css';

const ProductContainer = (props) => {

    return (
        <div className="container product-list-container">
            <ProductList products={props.products} />
        </div>
    )
    
}
const mapStateToProps = store => ({    
    products: store.productReducer.products 
});

export default withRouter(connect(mapStateToProps, {getProducts})(ProductContainer));