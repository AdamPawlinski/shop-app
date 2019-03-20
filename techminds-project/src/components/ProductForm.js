import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, getFormValues } from 'redux-form';
import Select from 'react-select';
import { optionHandler } from './actions';

let ProductForm = (props) => {
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

    const productOptions = props.option.values.map(
       valueItem => {
           return {
               label: valueItem.name,
               labelId: valueItem.id,
               value: valueItem.priceModifier,
               option: props.option.id
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

    // const handleProductState = (optionChange) => {
    //     // const id = e.target.key;
    //     // const product = e.target;
    //     // const optionName = handleOptionChange();
    //     console.log(optionChange);        
    //     currentProductState(optionChange);
    // } 

    // const handleOptionChange = (e) => {
    //     // e.preventDefault();
    //     console.log(e.label);
    //     setOptionValue(e.label);
    //     // currentProductState(optionValue, props.item.id);
    // }


    //   options={productOptions} defaultValue={{label: productOptions[0].label}}
    const optionsComponent = ({ input }) => {
        return (            
            <label>{input.name.split('-')[1]}
                <select {...input}>
                    {
                        props.option.values.map(
                            valueItem => <option key={valueItem.id} value={valueItem.priceModifier}>{valueItem.name}</option>
                        )
                    }
                </select>
            </label>
        )
    }

    const optionChangeHandler = (e) => { 
        const productId = parseFloat(props.name.split('-')[0]),         
            optionName = props.name,
            optionChanged = e.target.options[e.target.selectedIndex].text,
            priceModifier = e.target.value;            
        let modification = 0,
            value = 0;
        console.log(props.formValue);         
        if (props.formValue) {
            value = Object.values(props.formValue).reduce((a,b) => parseFloat(a) + parseFloat(b), 0);            
        }   else {
                return value = 0;
            }
        // {  
        // value = props.formValue.forEach(
        //     item => {
        //         if (item.split('-')[0] === productId){
        //             console.log(modification);
        //             return modification += Object.values(item)
        //         } else {
        //             return 0;
        //         }
        //     }
        // )} else value = 0; 
        const product = props.products.find(item => item.id === productId);               
        const price = parseFloat(product.price); 
        console.log(price, value, priceModifier);        
        const priceModified = {
            price: (price + parseFloat(value) + parseFloat(priceModifier)).toFixed(2)
        };        
        console.log(priceModified);
        props.optionHandler(productId, priceModified);
    }

    return (
            <form className="container">
                <Field component={optionsComponent} onChange={optionChangeHandler} name={props.name} type="select"/>                
            </form>            
    )
}

const mapStateToProps = store => {  
    return {
        options: store.productReducer.products.options,
        products: store.productReducer.products
    }
};

ProductForm = reduxForm({
    form: 'option-form'
})(ProductForm);

// const selector = getFormValues('option-form');

ProductForm = connect(state => ({
    formValue:  getFormValues('option-form')(state)
}))(ProductForm);

export default connect(mapStateToProps, {optionHandler})(ProductForm);
