import React, { useState } from 'react';
import { connect } from 'react-redux';
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

    // mapping select options for react-select element 
    // const {optionValue, setOptionValue} = useState('');

    const productOptions = props.option.values.map(
       value => {
           return {
               label: value.name,
               value: value.priceModifier
           }
       }
    )

    // const handleOptionChange = (e) => {
    //     return e.target.label;
    // }

    // const optionChangeHandler = (e) => {
    //     console.log(e.label);
    //     // props.option.filter(
    //     //     i => e.target.value
    //     // )
    //     const optionChangeValue = e.label;
    //     optionChange(optionChangeValue)
    // }

    return (
            <div className="container">
                <label className="form-label" htmlFor={props.option.name}>{props.option.name}</label>                
                <Select id={props.option.values.id}  name={props.option.name} options={productOptions} defaultValue={productOptions[0].label} onChange={(e) => props.optionChange(e)}/>
            </div>            
    )
}

const mapStateToProps = store => {  
    return {
        products: store.products
    }
};

export default connect(mapStateToProps)(ProductForm);
