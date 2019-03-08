import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const UserForm = () => {
    return (
        <div>
            UserForm
            <button><Link to="/orderSummary">Send</Link></button>
        </div>
    )
}

export default UserForm;