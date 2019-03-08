import React, { Component } from 'react';
import ProductForm from './ProductForm';

const Product = (props) => {
    const submitProductFormHandle = (value) => {
        console.log(value);
    }
    return (
        <div>
            <img src={props.item.img} alt="" />
            <h3>{props.item.name}</h3>
            <span>{props.item.oldPrice} </span>
            <span>{props.item.price}</span> 
            <form>
                {
                    props.item.options.map(
                        (option) => <ProductForm option={option} key={option.id} />         
                    )
                } 
                <button type="submit" name="Buy" onSubmit={submitProductFormHandle}>Buy</button> 
            </form>                             
        </div>
    )
}

export default Product;