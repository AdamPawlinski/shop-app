import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Basket from './Basket';
// import logo from '../resources';
// import basket from '../resources';

const Navigation = () => {
    return (
        <header>
            Navigation
            <Link to="/"><img src="{logo}" alt="logo"/></Link>
            <Link to="/basket"><img src="{basket}" alt="basket"/></Link>            
            <span>items no</span>
        </header>
    )
}

export default Navigation;