import React, { useState } from 'react';
import OrderSummary from './OrderSummary';
import '../styles/userForm.css';

const UserForm = (props) => {
    const [submittedForm, submitForm] = useState(false);
    const [formData, setFormData] = useState({});

    // email validation

    const emailHandler = (e) => {
        let email = e.target.value;
        return email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) ? '' : (e.target.classList.toggle('invalid') && document.querySelector('.invalid-warning').classList.toggle('active'));       
    }

    // submitting the form, checking if all fields are not empty, and transforming data to JSON 
    const onSubmitForm = (e) => {
        e.preventDefault();
        if (!e.target.checkValidity()) return document.querySelector('.empty-form-warning').classList.toggle('active');
        const inputs = e.target;
        let formData = {};
        for (let i = 0; i < inputs.length; i++){
            formData[inputs[i]['name']] = inputs[i]['value'];
        } 
        console.log(formData);
        const userData = {
            name: formData.name,
            surname: formData.surname,
            email: formData.email,
            address: {
                street: formData.street, 
                houseNumber: formData.houseNamber, 
                city: formData.city, 
                postcode: formData.postcode
            }
        }

        const product = props.products.map(
            product => product = {
                id: product.id,
                options: [
                    product.options.map(
                        j => ({
                            id: j.id,
                            value: j.value
                        })
                    )
                ],
                amount: product.price
            }
        )        

        const orderSummary = {
            user: userData,
            product: product
        };
        console.log(orderSummary);
        setFormData(formData);
        submitForm(true);
    }

    return (
        submittedForm === true ? <OrderSummary products={props.products} formData={formData}/> : 
        <div className="container container-user-form">
            <form className="user-form" id="userForm" onSubmit={(e) => onSubmitForm(e)} noValidate>
                <fieldset className="user-form-fieldset">
                    <legend>Your personal data:</legend>
                    <label className="form-label" htmlFor="name">Name:</label>
                    <input className="user-form-input" type="text" name="name" id="name" placeholder="John" required />
                    <label className="form-label" htmlFor="surname">Surname:</label>
                    <input className="user-form-input" type="text" name="surname" id="surname" placeholder="Doe" required/>
                    <label className="form-label" htmlFor="email">Email:</label>
                    <input className="user-form-input email-input" type="email" name="email" id="email" placeholder="john.doe@fake.com" onBlur={(e) => emailHandler(e)} required/>
                    <div className="invalid-warning">Invalid email address</div>
                </fieldset>
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
                <div className="empty-form-warning">Fill the empty fields in the form</div>
                <input className="submit-button" type="submit" name="send" target="_self" value="Send"/>
            </form>
        </div>
    )
}

export default UserForm;