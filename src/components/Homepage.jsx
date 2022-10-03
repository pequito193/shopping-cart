import React from "react";
import './../styles/Homepage.css'

function Homepage() {

    return (
        <React.Fragment>
            <div className="homepage-main">
            </div> 
            <footer>
                <a target='blank' href='https://github.com/pequito193/' className="github">pequito193 </a>
                <img className="github-icon" src={require('./../assets/icons/github.png')} alt="github icon" />
            </footer>
        </React.Fragment>
    )
}

export default Homepage;