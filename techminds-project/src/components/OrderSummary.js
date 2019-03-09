import React, { Component } from 'react';

const OrderSummary = (props) => {
    const form = props.formData;

    return (
        <div>
            <h2>OrderSummary:</h2>            
            <h3>{form.name}</h3>
            <h3>{form.surname}</h3>
            <span>{form.email}</span>
            <h2>Products:</h2>
            {props.products}
            <h2>Sending address:</h2>
            <span>{form.street} {form.houseNumber}</span>
            <span>{form.city} {form.postcode}</span>
        </div>
    )
}

export default OrderSummary;