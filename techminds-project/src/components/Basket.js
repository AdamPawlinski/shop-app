import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserForm from './UserForm';

const Basket = () => {
    const productState = () => {
        if (!localStorage.getItem()) {
            return ""
        } else {
            JSON.parse(localStorage.getItem())
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
        <div>
            <h2>Products you have chosen:</h2>
            <div>
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
            <button onClick={onClickHandler}>Accept purchase</button>
        </div>
    )
}

export default Basket;