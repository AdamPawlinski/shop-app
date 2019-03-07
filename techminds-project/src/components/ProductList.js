import React, { Component } from 'react';
import Product from './Product';
import products from './products';

const ProductList = () => {
    return (
        <div>
            {
                products.map(
                    (item) => <Product item={item} key={item.id}/>        
                )
            }            
        </div>
    )
}

export default ProductList;