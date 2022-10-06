import React from "react";
import './../styles/Catalog.css'
import { catalogItems } from "./CatalogItems";

function Catalog(props) {

    const { handleAddToCart } = props;

    const catalogList = [];
    for (let i = 0; i < catalogItems.length; i++) {
        catalogList.push(
            <div className="item-wrapper" key={catalogItems[i][2]}>
                <div className="item-info-wrapper">
                    <img src={require(`./../assets/catalog-items/${catalogItems[i][0]}`)} className='item-picture' alt='catalog item' />
                    <p className="item-description">{catalogItems[i][2]}</p>
                </div>
                <p className="item-price">{catalogItems[i][1]}</p>
                <form onSubmit={handleAddToCart} className='catalog-form'>
                    <input type = "hidden" name = "price" value={catalogItems[i][1]} />
                    <input type = "hidden" name = "name" value={catalogItems[i][2]}  />
                    Quantity<input className="quantity-input" type='number' name="quantity" placeholder="1" min={1} max={100} />
                    <input type='hidden' name="ref" value={catalogItems[i][0]} />
                    <button type="submit" className="add-to-cart">Add To Cart</button>
                </form>
            </div>
        );
    };

    return (
        <React.Fragment>
            <div className="catalog-main">
                {catalogList}
            </div>
        </React.Fragment>
    )
}

export default Catalog;