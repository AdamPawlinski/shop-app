import React from 'react';
import Product from './Product';

const ProductList = (props) => {
    return (
        <div className="product-list">
            {console.log(props)}
            {                
                props.products.map(
                    (item) => <Product item={item} key={item.id}/>        
                )
            }            
        </div>
    )
}

export default ProductList;