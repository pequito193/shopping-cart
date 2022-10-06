import React from "react";
import './../styles/Cart.css';

function Cart(props) {
    
    const { totalCost, cartItems, handleIncreaseAmount, handleDecreaseAmount, handleRemoveItem } = props;

    function round(x) {
        return Math.round((x + Number.EPSILON) * 100) / 100;
    }

    let cartItemsList = [];
    for (let i = 0; i < cartItems.length; i++) {
        cartItemsList.push (
            <tr key={cartItems[i].name}>
                    <td>
                        <p className="item-name">{cartItems[i].name}</p>
                    </td>
                    <td>
                        <form className="cart-form">
                            <button id={i} className="change-value" onClick={handleDecreaseAmount}>-</button>
                            <span className="item-quantity">{cartItems[i].quantity}</span>
                            <button id={i} className="change-value" onClick={handleIncreaseAmount}>+</button>
                        </form>
                    </td>
                    <td>${round(cartItems[i].price * cartItems[i].quantity)}</td>
                    <td>
                        <p onClick={handleRemoveItem} id={i} className="remove">X</p>
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
                    <p className="cost">Total: ${round(totalCost)}</p>
                    <button className="checkout">Checkout</button>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Cart;