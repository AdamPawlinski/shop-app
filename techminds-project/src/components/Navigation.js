import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Basket from './Basket';
// import logo from '../resources';
// import basket from '../resources';
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
        <header>
            Navigation
            <Link to="/"><img src="{logo}" alt="logo"/></Link>
            <Link to="/basket"><img src="{basket}" alt="basket"/></Link>            
            <span>{basketCount}</span>
        </header>
    )
}

export default Navigation;