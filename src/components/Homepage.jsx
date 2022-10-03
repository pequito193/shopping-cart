import React from "react";
import './../styles/Homepage.css'

function Homepage() {

    return (
        <React.Fragment>
            <div className="main">
                <div className="introduction">
                    <span className="introduction-text">We at Map World™ share a love for cartography and all it entails. Check out our catalog to discover what we have to offer!</span>
                </div>
            </div> 
            <footer>
                <p className="thank-you-note">Thank you for choosing us.</p>
                <div className="contact-wrapper">
                    <p className="contacts">Find us at</p>
                    <p className="contact-info">Dammtorstrasse 12, Hamburg, Germany</p>
                    <p className="contact-info">(+49) 040 34106788</p>
                </div>
                <p className="brand">Map World™</p>
            </footer>
        </React.Fragment>
    )
}

export default Homepage;