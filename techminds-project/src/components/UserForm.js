import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import OrderSummary from './OrderSummary';

const UserForm = (props) => {
    const [submittedForm, submitForm] = useState(false);
    const [formData, setFormData] = useState({});
    const [email, setEmail] = useState('');

    const emailHandler = (e) => {
        setEmail(e.target.value);        
    }

    useEffect(() => {       
        return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? '' : document.querySelector('.email-input').classList.add('invalid');
    }, [email]);

    const onSubmitForm = (e) => {
        if (!e.target.checkValidity()) return;
        console.log(e);
        setFormData(e);
        submitForm(true);
    }

    return (
        submittedForm === true ? <OrderSummary products={props.products} formData={formData}/> : 
        <form id="userForm" noValidate>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" placeholder="John" required />
            <label htmlFor="surname">Surname:</label>
            <input type="text" name="surname" id="surname" placeholder="Doe" required/>
            <label htmlFor="email">Email:</label>
            <input className="email-input" type="email" name="email" id="email" placeholder="john.doe@fake.com" onChange={emailHandler} required/>
            <fieldset>
                <legend>Address:</legend>
                <label htmlFor="street">Street:</label>
                <input type="text" name="street" id="street" required/>
                <label htmlFor="houseNumber">No:</label>
                <input type="text" name="houseNumber" id="houseNumber" required/>
                <label htmlFor="city">City:</label>
                <input type="text" name="city" id="city" required/>
                <label htmlFor="postcode">Post code:</label>
                <input type="text" name="postcode" id="postcode" required/>                
            </fieldset>
            <input type="submit" name="send" onSubmit={onSubmitForm} target="_self" value="Send" />
        </form>
    )
}

export default UserForm;