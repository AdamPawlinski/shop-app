import React from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from './actions';
import '../styles/basket.css';

const BasketItem = (props) => {
        
    const deleteHandler = (id) => {
        props.deleteProduct(id);
    }
    
    const item = props.item;

    return ( 
        <div className="basket-item" id="product">
            {console.log(item)}
            <div>{item.name}</div>
            <div>{item.price}</div>
            {/* <div>{item.options.Color}</div>
            <div>{item.options.Capacity}</div> */}
            <button onClick={() => deleteHandler(item.id)}>delete</button>                            
        </div> 
    )
    
}

const mapStateToProps = store => ({   
    // products: store.basketContent
});

export default connect(mapStateToProps, { deleteProduct })(BasketItem);