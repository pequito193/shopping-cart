import React from "react";
import './../styles/Home.css'
import { Link } from "react-router-dom";

function Home() {

    return (
        <React.Fragment>
            <div className="home-main">
                <div className="image-div">
                    <span className="troll">Nothing suspicious going on here.</span>
                </div>
                <div className="right-side-wrapper">
                    <div className="quote-wrapper">
                        <em className="quote">"Geographers never get lost. They just do accidental field work"</em>
                        <p className="author">- Nicholas Chrisman</p>
                    </div>
                    <Link to='/catalog'><button className="shop-now">Shop Now</button></Link>
                </div>
            </div> 
        </React.Fragment>
    )
}

export default Home;