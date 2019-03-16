import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/ordersummary.css';

const OrderSummary = (props) => {
    const form = props.formData;
    const products = props.productsInBasket;

    return (
        <div className="container">
            <h2 className="header-2 summary-header">OrderSummary:</h2>            
            <h3 className="header-3">{form.name}</h3>
            <h3 className="header-3">{form.surname}</h3>
            <span>{form.email}</span>
            <h2 className="header-2">Products:</h2>
                {products.map(
                        (value) => {
                            return (
                                <div key={value.name}>
                                    <div>{value.name}</div>
                                    <div>{value.options[0].name}: {value.options[0].values.name}</div>
                                    <div>{value.options[1].name}: {value.options[1].values.name}</div>
                                    <div>{value.price}  </div>                                                             
                                </div> 
                            )                           
                        }       
                    )
                }
            <h2 className="header-2">Sending address:</h2>
            <span>{form.street} {form.houseNumber}</span>
            <span>{form.city}, {form.postcode}</span>
        </div>
    )
}

const mapStateToProps = store => {    
    return {productsInBasket: store.productReducer.basketProducts}
};

export default withRouter(connect(mapStateToProps)(OrderSummary));