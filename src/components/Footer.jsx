import React from "react";
import './../styles/Footer.css'

function Footer() {

    return (
        <React.Fragment>
            <footer>
                    <a target='blank' href='https://github.com/pequito193/' className="github">pequito193 </a>
                    <img className="github-icon" src={require('./../assets/icons/github.png')} alt="github icon" />
            </footer>
        </React.Fragment>
    )
}

export default Footer;