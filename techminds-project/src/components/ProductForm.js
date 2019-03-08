import React, { Component } from 'react';

const ProductForm = (props) => {
    return (        
        <div>
            <div>
                <label htmlFor="color">{props.option.name}</label>
                <select id="color">
                    {
                        props.option.values.map(
                            value => <option key={value.id}>{value.name}</option>
                        ) 
                    }                   
                </select>
                {/* <label key={props.item.options.id} htmlFor="capacity">{props.item.options.name}</label>
                <select id="capacity">
                    <option key={props.item.options.values.id}>{props.item.options.values.name}</option>                    
                </select> */}            
            </div>            
        </div>
    )
}

export default ProductForm;