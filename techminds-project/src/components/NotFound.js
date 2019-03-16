import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container">
            <h2 className="header-2">Error 404 - Page Not Found</h2>
            <h3 className="header-3">Please go to the <Link to="/">main page</Link></h3>
        </div>
    )
}

export default NotFound;