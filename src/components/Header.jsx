import React from "react";
import './../styles/Header.css'

function Header() {

    return (
        <React.Fragment>
            <header>
                <p className="header-element" >Homepage</p>
                <p className="header-element" >Catalog</p>
                <img src={require("./../images/shopping-cart.png")} className="header-icon" alt="" />
            </header>
        </React.Fragment>
    )
}

export default Header;