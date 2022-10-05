import React, { useState, useEffect } from "react";
import Home from "./Home";
import Cart from "./Cart";
import Catalog from "./Catalog";
import { Route, Routes } from "react-router-dom";

function Main() {

    const [totalCost, setTotalCost] = useState(0);

    const [cartItems, setCartItems] = useState([]);



    function handleAddToCart(e) {
        e.preventDefault();
        let targetPrice = Number(e.target[0].value.substring(1));
        let targetName = e.target[1].value;
        let targetQuantity = Number(e.target[2].value);

        // Sets the quantity to 1 incase the user doesn't input anything
        if (targetQuantity === 0 || targetQuantity === undefined) {
            targetQuantity = 1;
        }

        // Check if the item is already in the cart, and if it is but a new quantity has been chosen, update the quantity
        for (let i = 0; i < cartItems.length; i++) {
            if (targetName === cartItems[i].name && targetQuantity === cartItems[i].quantity) {
                return;
            } 
            else if (targetName === cartItems[i].name && targetQuantity != cartItems[i].quantity) {
                let updatedCartItems = structuredClone(cartItems);
                updatedCartItems[i].quantity = targetQuantity;
                setCartItems(updatedCartItems);
                return;
            }
        }

        // Add the item to the cart
        setCartItems(cartItems.concat([{
            name: targetName,
            price: targetPrice,
            quantity: targetQuantity
        }]));
    }



    function handleAddItemAmount(e) {
        e.preventDefault();
    }



    // Updates the total cost anytime the cartItems array changes
    useEffect( () => {
        for (let i = 0; i < cartItems.length; i++) {
            setTotalCost(totalCost + (cartItems[i].price * cartItems[i].quantity));
        }
        console.log(cartItems);
    }, [cartItems]);



    return (
        <React.Fragment>
            <Routes>
                <Route exact path="/shopping-cart/" element={<Home />} />
                <Route exact path="/shopping-cart/catalog" element={<Catalog handleAddToCart={handleAddToCart} />} />
                <Route exact path="/shopping-cart/cart" element={<Cart handleAddItemAmount={handleAddItemAmount} totalCost={totalCost} cartItems={cartItems} />} />
            </Routes>
        </React.Fragment>
    );
}

export default Main;