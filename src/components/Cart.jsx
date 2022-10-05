import React from "react";
import './../styles/Cart.css';

function Cart(props) {
    
    const { totalCost, cartItems, handleAddItemAmount } = props;

    let cartItemsList = [];
    // for (let i = 0; i < cartItems.length; i++) {
    //     cartItemsList.push (
    //         <form>
    //             <button className="change-value">-</button>
    //             <button className="change-value">+</button>
    //         </form>
    //     );
    // };


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