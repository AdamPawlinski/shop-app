import React, { useState } from 'react';
import Select from 'react-select';

const ProductForm = (props) => {
    // const [price, changePrice] = useState(props.initPrice);
    // const onInputPriceHandler = (e) => {
    //     e.preventDefault();
    //     const updatePrice = props.price + Number(e.target.value);
    //     priceChange(updatePrice);
    //     // changePrice(updatePrice);
    //     // console.log(e.target.closest('form').querySelectorAll('#productOptionColor').value);
    //     // props.priceChanger(updatePrice);       
    // }   
    const productOptions = props.option.values.map(
       value => {
           return {
               label: value.name,
               value: value.priceModifier
           }
       }
    )

    return (
            <div className="container">
                <label className="form-label" htmlFor={props.option.name}>{props.option.name}</label>
                {/* <select id={`productOption${props.option.name}`} name={props.option.name} onInput={(e) => priceChange(e)}>
                    {
                        props.option.values.map(
                            value => <option  className="productFeature"  key={value.id} value={value.priceModifier}>{value.name}</option>
                        ) 
                    }                   
                </select> */}
                <Select id={`productOption${props.option.name}`} name={props.option.name} options={productOptions}/>
            </div>            
    )
}

export default ProductForm;