import React from "react";
import './../styles/Header.css'
import { Link } from "react-router-dom";

function Header() {

    return (
        <React.Fragment>
            <header className="header" >
                <Link to='/' className="header-element" >Homepage</Link>
                <Link to='/catalog' className="header-element" >Catalog</Link>
                <Link to='/cart'><img src={require("./../assets/icons/shopping-cart.png")} className="header-icon" alt="" /></Link>
            </header>
        </React.Fragment>
    )
}

export default Header;