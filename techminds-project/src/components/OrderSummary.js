import React, { Component } from 'react';

const OrderSummary = (props) => {
    const form = props.formData;

    return (
        <div className="container">
            <h2 className="header-2">OrderSummary:</h2>            
            <h3 className="header-3">{form.name}</h3>
            <h3 className="header-3">{form.surname}</h3>
            <span>{form.email}</span>
            <h2 className="header-2">Products:</h2>
            {props.products}
            <h2 className="header-2">Sending address:</h2>
            <span>{form.street} {form.houseNumber}</span>
            <span>{form.city} {form.postcode}</span>
        </div>
    )
}

export default OrderSummary;