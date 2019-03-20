import React, { useState } from 'react';
import { connect } from 'react-redux';
import BasketItem from './BasketItem';
import UserForm from './UserForm1';
import { deleteProduct } from './actions';
import '../styles/basket.css';

const Basket = (props) => {
    const [acceptBasket, setBasket] = useState(false);
    
    const onClickHandler = () => {
        // localStorage.clear();
        setBasket(true);
    }
    // const productState = () => {
    //     if (!localStorage.getvalue('1-iPhone 8')) {
    //         return ""
    //     } else {
    //         JSON.parse(localStorage.getvalue('1-iPhone 8 Plus'))
    //     }
    // }
    // const [productsChosen, updateProductsChosen] = useState(productState);
 

    // const deleteProduct = (e) => {
    //     productsChosen.delete(e.target.value);
    //     localStorage.setvalue('buyProduct', JSON.stringify(productsChosen));
    //     updateProductsChosen(productsChosen);
    // }

    const products = props.products;

    return (        
        acceptBasket === true ? (<UserForm products={products}/>) :(        
            <div className="container"> 
                <h2 className="header-2">Products you have chosen:</h2>
                {/* {console.log(products)} */}
                    {!products === true ? (
                        <div> 
                            There are no products in your basket
                        </div>
                    ) : (
                        <React.Fragment>                     
                            {products.map(
                                (item) => <BasketItem item={item} key={item.key}/>  
                            )}
                            <button className="submit-button" onClick={onClickHandler}>Accept purchase</button>
                        </React.Fragment>
                    )}                
            </div>
        )
    )
    
}

const mapStateToProps = store => ({   
    products: store.productReducer.basketProducts
});

export default connect(mapStateToProps, { deleteProduct })(Basket);
