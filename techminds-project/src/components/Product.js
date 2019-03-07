import React, { Component } from 'react';

const Product = (props) => {
    return (
        <div>
            {props.item.name}
        </div>
    )
}

export default Product;