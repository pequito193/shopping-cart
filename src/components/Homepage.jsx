import React from "react";
import './../styles/Homepage.css'
import Header from "./Header";
import Footer from "./Footer";

function Homepage() {

    return (
        <React.Fragment>
            <Header />
            <div className="homepage-main">
            </div> 
            <Footer />
        </React.Fragment>
    )
}

export default Homepage;