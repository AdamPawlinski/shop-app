import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ProductForm from './ProductForm';
import priceChange from '../App';
import '../styles/product.css';

const Product = (props) => {
    // const [price, priceModifier] = useState(props.item.price);
    const [itemCounter, setItemCounter] = useState(1);
    
    // useEffect((e) => {
    //     props.dispatch(priceChange(e));
    // }, []);   
    
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

    // const priceHandler = (updatePrice) => {
    //     console.log(updatePrice);
    //     priceModifier(updatePrice);
    // }

    return (
        <div className="container product-container">         
            <img className="product-image" src={props.item.img} alt={props.item.name} />
            <h3 className="header-3 productFeature" id="productName">{props.item.name}</h3>
            <span>{props.item.oldPrice}</span>
            <span className="productFeature" id="productPrice" >{props.item.price}</span> 
            <form className="product-form" onSubmit={submitProductFormHandler} >            
                {
                    props.item.options.map(
                        (option) => <ProductForm option={option} key={option.id}/>         
                    )
                } 
                <input className="submit-button" type="submit" value="Buy" name="buy" />                      
            </form>                             
        </div>
    )
}
const mapStateToProps = store => ({   
    price: store.priceChange.products.price
});

export default connect(mapStateToProps)(Product);