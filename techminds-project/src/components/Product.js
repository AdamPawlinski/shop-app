import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import uuid from 'uuid';
import ProductForm from './ProductForm';
import { addProduct } from './actions';
import '../styles/product.css';

let Product = (props) => {
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

    const handleAddProduct = (e) => {
        e.preventDefault();
        // const inputs = e.target;
        // let formData = {};
        // for (let i = 0; i < inputs.length; i++){
        //     formData[inputs[i]['name']] = inputs[i]['value'];
        // }
        // // const productJSON = JSON.stringify(formData);
        // const id = e.target.closest('.product-form').getAttribute('key');
        const id = props.item.id
        let key = uuid();   
        console.log(id, key);     
        props.addProduct(id, key);
    }    

    const priceModifier = () => {
        const priceModified = props.item.price + props.priceModifier.Color + props.priceModifier.Capacity; 
        console.log(priceModified);
        return priceModified;
    }

    return (
        <div className="container product-container">
            <img className="product-image" src={process.env.PUBLIC_URL+props.item.img} alt={props.item.name} />            
            <div key={props.item.id} className="product-form">                 
                <div className="product-input-text header-3 productFeature">{props.item.name}</div>
                <div className="product-old-price">${props.item.oldPrice}</div>
                <div className="product-input-text productFeature">{`$${props.item.price}`}</div>
                {
                    props.item.options.map(
                        (option) => <ProductForm name={`${props.item.id}-${option.name}`} option={option} key={option.id}/>
                    )
                } 
                <button className="submit-button" onClick={handleAddProduct}>Buy</button>                      
            </div>                             
        </div>
    )
}
const mapStateToProps = store => ({
    products: store.productReducer.basketProducts
});



export default withRouter(connect(mapStateToProps, {
    addProduct
})(Product));