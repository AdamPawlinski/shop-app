import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import OrderSummary from './OrderSummary';
import '../styles/userForm.css';

const UserForm = (props) => {
    const [submittedForm, submitForm] = useState(false);
    const [formData, setFormData] = useState({});
    const [email, setEmail] = useState('');

    const emailHandler = (e) => {
        setEmail(e.target.value);        
    }

    useEffect(() => {       
        return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? '' : document.querySelector('#email-input').classList.add('invalid');
    }, [email]);

    const onSubmitForm = (e) => {
        if (!e.target.checkValidity()) return;
        console.log(e);
        setFormData(e);
        submitForm(true);
    }

    return (
        submittedForm === true ? <OrderSummary products={props.products} formData={formData}/> : 
        <div className="container container-user-form">
            <form className="user-form"id="userForm" noValidate>
                <label className="form-label" htmlFor="name">Name:</label>
                <input className="user-form-input" type="text" name="name" id="name" placeholder="John" required />
                <label className="form-label" htmlFor="surname">Surname:</label>
                <input className="user-form-input" type="text" name="surname" id="surname" placeholder="Doe" required/>
                <label className="form-label" htmlFor="email">Email:</label>
                <input className="user-form-input" id="email-input" type="email" name="email" id="email" placeholder="john.doe@fake.com" onChange={emailHandler} required/>
                <fieldset className="user-form-fieldset">
                    <legend>Address:</legend>
                    <label className="form-label" htmlFor="street">Street:</label>
                    <input className="user-form-input" type="text" name="street" id="street" required/>
                    <label className="form-label" htmlFor="houseNumber">No:</label>
                    <input className="user-form-input" type="text" name="houseNumber" id="houseNumber" required/>
                    <label className="form-label" htmlFor="city">City:</label>
                    <input className="user-form-input" type="text" name="city" id="city" required/>
                    <label className="form-label" htmlFor="postcode">Post code:</label>
                    <input className="user-form-input" type="text" name="postcode" id="postcode" required/>                
                </fieldset>
                <input className="submit-button" type="submit" name="send" onSubmit={onSubmitForm} target="_self" value="Send" />
            </form>
        </div>
    )
}

export default UserForm;