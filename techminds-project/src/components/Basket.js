import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserForm from './UserForm';
import '../styles/basket.css';

const Basket = () => {
    const productState = () => {
        if (!localStorage.getItem('1-iPhone 8')) {
            return ""
        } else {
            JSON.parse(localStorage.getItem('1-iPhone 8 Plus'))
        }
    }
    const [productsChosen, updateProductsChosen] = useState(productState);
    const [acceptBasket, setBasket] = useState(false);

    const deleteProduct = (e) => {
        productsChosen.delete(e.target.value);
        localStorage.setItem('buyProduct', JSON.stringify(productsChosen));
        updateProductsChosen(productsChosen);
    }

    const onClickHandler = () => {
        localStorage.clear();
        setBasket(true);
    }

    return (
        acceptBasket === true ? <UserForm products={productsChosen}/> :
        <div className="container">
            <h2 className="header-2">Products you have chosen:</h2>
            <div className="basket-item">
                {
                    productsChosen.map(
                        item => {
                             return (
                                <div item={item} key={item.id}>
                                    {item.name}
                                    <button onClick={deleteProduct}>delete</button>                            
                                </div> 
                             )                           
                        }       
                    )
                }            
            </div>
            <button className="submit-button" onClick={onClickHandler}>Accept purchase</button>
        </div>
    )
}

export default Basket;