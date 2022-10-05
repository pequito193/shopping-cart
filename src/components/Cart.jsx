import React from "react";
import './../styles/Cart.css';

function Cart(props) {
    
    const { totalCost, cartItems, handleIncreaseAmount, handleDecreaseAmount } = props;

    let cartItemsList = [];
    for (let i = 0; i < cartItems.length; i++) {
        cartItemsList.push (
            <form key={cartItems[i].name}>
                <button className="change-value" onClick={handleDecreaseAmount}>-</button>
                <span className="item-quantity">{cartItems[i].quantity}</span>
                <button className="change-value" onClick={handleIncreaseAmount}>+</button>
            </form>
        );
    };


    return (
        <React.Fragment>
            <div className="cart-main">
                <h1>Your Cart</h1>
                <p className="cost">Total: ${totalCost}</p>
                <div className="cart-items-display">
                    {cartItemsList}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Cart;