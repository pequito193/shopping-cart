import React, { useState, useEffect } from "react";
import Home from "./Home";
import Cart from "./Cart";
import Catalog from "./Catalog";
import { Route, Routes } from "react-router-dom";

function Main() {

    const [totalCost, setTotalCost] = useState(0);

    const [cartItems, setCartItems] = useState([]);

    function round(x) {
        return Math.round((x + Number.EPSILON) * 100) / 100;
    }

    function handleAddToCart(e) {
        e.preventDefault();
        let targetPrice = Number(e.target[0].value.substring(1));
        let targetName = e.target[1].value;
        let targetQuantity = Number(e.target[2].value);
        let targetRef = e.target[3].value;

        // Sets the quantity to 1 incase the user doesn't input anything
        if (targetQuantity === 0 || targetQuantity === undefined) {
            targetQuantity = 1;
        }

        // Check if the item is already in the cart, and if it is but a new quantity has been chosen, update the quantity
        for (let i = 0; i < cartItems.length; i++) {
            if (targetName === cartItems[i].name) {
                let updatedCartItems = structuredClone(cartItems);
                updatedCartItems[i].quantity = targetQuantity + cartItems[i].quantity;
                setCartItems(updatedCartItems);
                return;
            }
        }

        // Clear up the input field
        e.target[2].value = '';

        // Add the item to the cart
        setCartItems(cartItems.concat([{
            name: targetName,
            price: round(targetPrice),
            quantity: targetQuantity,
            ref: targetRef
        }]));
    }



    function handleIncreaseAmount(e) {
        e.preventDefault();
        let i = e.target.id;
        if (cartItems[i].quantity === 100) {
            return;
        };
        let updatedCartItems = structuredClone(cartItems);
        updatedCartItems[i].quantity = cartItems[i].quantity + 1;
        setCartItems(updatedCartItems);
    }

    function handleDecreaseAmount(e) {
        e.preventDefault();
        let i = e.target.id;
        if (cartItems[i].quantity === 1) {
            return;
        };
        let updatedCartItems = structuredClone(cartItems);
        updatedCartItems[i].quantity = cartItems[i].quantity - 1;
        setCartItems(updatedCartItems);
    }

    function handleRemoveItem(e) {
        let i = e.target.id;
        let updatedCartItems = structuredClone(cartItems);
        updatedCartItems.splice(i, 1);
        setCartItems(updatedCartItems);
    }



    // Updates the total cost anytime the cartItems array changes
    useEffect( () => {
        let newCost = 0;
        for (let i = 0; i < cartItems.length; i++) {
            let holderVariable = cartItems[i].price * cartItems[i].quantity;
            newCost = newCost + holderVariable;
        }
        setTotalCost(round(newCost));
    }, [cartItems]);



    return (
        <React.Fragment>
            <Routes>
                <Route exact path="/shopping-cart/" element={<Home />} />
                <Route exact path="/shopping-cart/catalog" element={<Catalog handleAddToCart={handleAddToCart} />} />
                <Route exact path="/shopping-cart/cart" element={<Cart handleRemoveItem={handleRemoveItem} handleIncreaseAmount={handleIncreaseAmount} handleDecreaseAmount={handleDecreaseAmount} totalCost={totalCost} cartItems={cartItems} />} />
            </Routes>
        </React.Fragment>
    );
}

export default Main;