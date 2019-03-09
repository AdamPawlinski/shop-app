import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';

const Product = (props) => {
    const [price, priceModifing] = useState(props.item.price);
    useEffect(() => {
         
        }, []);

    const submitProductFormHandle = (e) => {
        e.preventDefault();
        localStorage.setItem('buyProduct', JSON.stringify(e.target.value));
        console.log(JSON.parse(localStorage.getItem('buyProduct')));
    }
    return (
        <div>
            <img src={props.item.img} alt="" />
            <h3>{props.item.name}</h3>
            <span>{props.item.oldPrice} </span>
            <span>{price}</span> 
            <form>
                {
                    props.item.options.map(
                        (option) => <ProductForm option={option} key={option.id} price={priceModifing}/>         
                    )
                } 
                <input type="submit" value="Buy" name="buy" onSubmit={submitProductFormHandle} /> 
            </form>                             
        </div>
    )
}

export default Product;