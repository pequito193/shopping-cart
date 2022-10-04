import React from "react";
import './../styles/Catalog.css'
import { catalogItems } from "./CatalogItems";
import Header from './Header';
import Footer from './Footer';

function Catalog() {

    const catalogList = [];
    for (let i = 0; i < catalogItems.length; i++) {
        catalogList.push(
            <div className="item-wrapper" key={catalogItems[i][0]}>
                <div className="item-info-wrapper">
                    <img src={require(`./../assets/catalog-items/${catalogItems[i][0]}`)} className='item-picture' alt='catalog item' />
                    <p className="item-description">{catalogItems[i][2]}</p>
                </div>
                <p className="item-price">{catalogItems[i][1]}</p>
                <button className="add-to-cart">Add To Cart</button>
            </div>
        )
    }

    return (
        <React.Fragment>
            <Header />
            <div className="catalog-main">
                {catalogList}
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Catalog;