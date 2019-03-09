import React, { Component } from 'react';

const ProductForm = (props) => {
    // const priceHandler = (e) => {;
    //     return e.target.value.priceModifier;        
    // }

    return (
        <div>            
            <div>
                <label htmlFor="color">{props.option.name}</label>
                <select id="color" onChange={props.price}>
                    {
                        props.option.values.map(
                            value => <option key={value.id} value={value}>{value.name}</option>
                        ) 
                    }                   
                </select>                          
            </div>            
        </div>
    )
}

export default ProductForm;