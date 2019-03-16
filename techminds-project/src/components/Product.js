import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductForm from './ProductForm';
import { addProduct, currentProductState } from './actions';
import '../styles/product.css';

const Product = (props) => {
    // const [price, priceModifier] = useState(props.item.price);
    // const [itemCounter, setItemCounter] = useState(1);
    
    // useEffect((e) => {
    //     props.dispatch(priceChange(e));
    // }, []);   
    
    // const submitProductFormHandler = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.elements);
    //     const clickedProduct = e.target.closest('.product-container');
    //     const clickedProductName = clickedProduct.querySelector('#productName').innerText;
    //     const clickedproductPrice = clickedProduct.querySelector('#productPrice').innerText;
    //     const clickedproductOptionColor = clickedProduct.querySelector('#productOptionColor').value;
    //     const clickedproductOptionCapacity = clickedProduct.querySelector('#productOptionCapacity').value;
    //     const counter = itemCounter+1;
    //     setItemCounter(counter);
    //     localStorage.setItem(`${itemCounter}-${clickedProductName}`, `${clickedProductName}-${clickedproductPrice}-${clickedproductOptionColor}-${clickedproductOptionCapacity}`);       
    // }

    // const priceHandler = (updatePrice) => {
    //     console.log(updatePrice);
    //     priceModifier(updatePrice);
    // }

    // const priceChange = props.store.subscribe(
    //     () => {
    //         return props.store.getState().product.price;
    //     }
    // )
    
    const [optionValue, setOptionValue] = useState('')

    const handleAddProduct = (e, id) => {
        e.preventDefault();
        // const inputs = e.target;
        // let formData = {};
        // for (let i = 0; i < inputs.length; i++){
        //     formData[inputs[i]['name']] = inputs[i]['value'];
        // }
        // // const productJSON = JSON.stringify(formData);
        // console.log(formData);        
        props.addProduct(id);
    }

    const handleProductState = (optionChange) => {
        // const id = e.target.key;
        // const product = e.target;
        // const optionName = handleOptionChange();
        console.log(optionChange);        
        currentProductState(optionChange);
    } 

    const handleOptionChange = (e) => {
        // e.preventDefault();
        console.log(e.label);
        setOptionValue(e.label);
        // currentProductState(optionValue, props.item.id);
    }

    return (
        <div className="container product-container">
            <img className="product-image" src={process.env.PUBLIC_URL+props.item.img} alt={props.item.name} />            
            <form className="product-form" onSubmit={(e) => handleAddProduct(e, props.item.id)} onInput={(optionChange) => handleProductState(optionChange)}>                 
                <input type="text" className="product-input-text header-3 productFeature" name="productName" id="productName" defaultValue={props.item.name}/>
                <div className="product-old-price">${props.item.oldPrice}</div>
                <input type="text" className="product-input-text productFeature" name="productPrice" id="productPrice" defaultValue={`$${props.item.price}`}/> 
                {
                    props.item.options.map(
                        (option) => <ProductForm option={option} key={option.id} optionChange={handleOptionChange}/>
                    )
                } 
                <input className="submit-button" type="submit" value="Buy"/>                      
            </form>                             
        </div>
    )
}
const mapStateToProps = store => ({
    products: store.products
});

export default withRouter(connect(mapStateToProps, {
    currentProductState,
    addProduct
})(Product));