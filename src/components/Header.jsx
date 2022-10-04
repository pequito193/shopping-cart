import React from "react";
import './../styles/Header.css'
import { Link } from "react-router-dom";

function Header() {

    return (
        <React.Fragment>
            <header className="header" >
                <span className="brand">Map World</span>
                <div className="header-wrapper">
                    <img className="planet" src={require('./../assets/icons/favicon.ico')} alt='' />
                    <Link to='/shopping-cart/' className="header-element" >Homepage</Link>
                    <Link to='/shopping-cart/catalog' className="header-element" >Catalog</Link>
                    <Link to='/shopping-cart/cart'><img src={require("./../assets/icons/shopping-cart.png")} className="header-icon" alt="" /></Link>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;