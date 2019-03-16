import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../resources/logo.jpg';
import '../styles/navigation.css';

// const basketCounter = () => {
//     if (!localStorage.length) {
//         return ''
//     } else {
//         return localStorage.length;
//     }
// }
// const [basketCount, setBasketCount] = useState(basketCounter);



const Navigation = (props) => {
    // const productsCounter = props.store.subscribe(
    //     () => {
    //         return props.store.getState().productsInBasket.length;
    //     }
    // )
    const productsQuantity = props.basketProducts.length;

    return (
        <header className="navigation-header">
            <Link to="/"><img className="navigation-logo" src={logo} alt="logo"/></Link>
            <div className="navigation-basket"> 
                <Link to="/basket"><i className="fas fa-cart-arrow-down"></i></Link>            
                <span className="navigation-basket-count">{productsQuantity}</span>
            </div>
        </header>
    )
}

const mapStateToProps = store => ({
    basketProducts: store.productReducer.basketProducts
});

export default withRouter(connect(mapStateToProps)(Navigation));