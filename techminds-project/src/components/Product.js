import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';

const Product = (props) => {
    const [price, priceModifier] = useState(props.item.price);
    const [text, setText] = useState('');
    const [itemCounter, setItemCounter] = useState(1);
    
    useEffect(() => {
         
        }, []);   
    
    const submitProductFormHandler = (e) => {
        e.preventDefault();
        console.log(e.target.elements);
        const clickedProduct = e.target.closest('.product-container');
        const clickedProductName = clickedProduct.querySelector('#productName').innerText;
        const clickedproductPrice = clickedProduct.querySelector('#productPrice').innerText;
        const clickedproductOptionColor = clickedProduct.querySelector('#productOptionColor').value;
        const clickedproductOptionCapacity = clickedProduct.querySelector('#productOptionCapacity').value;
        const counter = itemCounter+1;
        setItemCounter(counter);
        localStorage.setItem(`${itemCounter}-${clickedProductName}`, `${clickedProductName}-${clickedproductPrice}-${clickedproductOptionColor}-${clickedproductOptionCapacity}`);        
    }

    return (
        <div className="product-container">            
            <img src={props.item.img} alt={props.item.name} />
            <h3 id="productName" className="productFeature">{props.item.name}</h3>
            <span>{props.item.oldPrice} </span>
            <span id="productPrice" className="productFeature">{price}</span> 
            <form onSubmit={submitProductFormHandler} >            
                {
                    props.item.options.map(
                        (option) => <ProductForm option={option} key={option.id} price={price}/>         
                    )
                } 
                <input type="submit" value="Buy" name="buy" />                      
            </form>                             
        </div>
    )
}

export default Product;