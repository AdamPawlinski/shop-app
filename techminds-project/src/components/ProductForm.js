import React, { useState } from 'react';

const ProductForm = (props) => {
    const [price, changePrice] = useState(props.price);
    const priceHandler = (e) => {
        e.preventDefault();
        const priceChange = price + Number(e.target.value);    
        changePrice(priceChange);
        console.log(priceChange);       
    }    

    return (
            <div>
                <label htmlFor={props.option.name}>{props.option.name}</label>
                <select id={`productOption${props.option.name}`} name={props.option.name} onInput={priceHandler}>
                    {
                        props.option.values.map(
                            value => <option  className="productFeature"  key={value.id} value={value.priceModifier}>{value.name}</option>
                        ) 
                    }                   
                </select>
            </div>            
    )
}

export default ProductForm;