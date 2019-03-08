import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Basket = () => {
    return (
        <div>
            Basket
            <button><Link to="/userForm">Accept purchase</Link></button>
        </div>
    )
}

export default Basket;