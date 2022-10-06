import React from "react";
import './../styles/Cart.css';

function Cart(props) {
    
    const { totalCost, cartItems, handleIncreaseAmount, handleDecreaseAmount } = props;

    let cartItemsList = [];
    for (let i = 0; i < cartItems.length; i++) {
        cartItemsList.push (
            <tr key={cartItems[i].name}>
                    <td className="identifier">
                        <img className="cart-image" src={require(`./../assets/catalog-items/${cartItems[i].ref}`)} alt='' />
                        <p className="item-name">{cartItems[i].name}</p>
                    </td>
                    <td>
                        <form className="cart-form">
                            <button className="change-value" onClick={handleDecreaseAmount}>-</button>
                            <span className="item-quantity">{cartItems[i].quantity}</span>
                            <button className="change-value" onClick={handleIncreaseAmount}>+</button>
                        </form>
                    </td>
                    <td>${cartItems[i].price * cartItems[i].quantity}</td>
                    <td>
                        <button className="remove">X</button>
                    </td>
            </tr>
        );
    };


    return (
        <React.Fragment>
            <div className="cart-main">
                <h1>Your Cart</h1>
                <div className="cart-items-display">
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <td className="table-title">Name</td>
                                <td className="table-title">Quantity</td>
                                <td className="table-title">Price</td>
                                <td className="table-title">Remove</td>
                            </tr>
                        </thead>
                        <tbody>{cartItemsList}</tbody>
                    </table>
                <div className="checkout-wrapper">
                    <p className="cost">Total: ${totalCost}</p>
                    <button className="checkout">Checkout</button>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Cart;