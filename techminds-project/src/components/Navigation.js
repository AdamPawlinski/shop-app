import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Basket from './Basket';
import logo from '../resources/logo.jpg';
import '../styles/navigation.css';

const basketCounter = () => {
    if (!localStorage.length) {
        return ''
    } else {
        return localStorage.length;
    }
}

const Navigation = () => {
    const [basketCount, setBasketCount] = useState(basketCounter);
    return (
        <header className="navigation-header">
            <Link to="/"><img className="navigation-logo" src="{logo}" alt="logo"/></Link>
            <div className="navigation-basket"> 
                <Link to="/basket"><i className="fas fa-cart-arrow-down"></i></Link>            
                <span className="navigation-basket-count">{basketCount}</span>
            </div>
        </header>
    )
}

export default Navigation;