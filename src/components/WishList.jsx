import React from "react";
import {wishListItems} from "./Search";
function WishList() {

    return (
        <div>
            <header>
                <h1>WishList</h1>
            </header>
        {wishListItems.map((item) => {
        return  (<div className="note"><h1>{item}</h1></div>);
        })}
        </div>);

}
export default WishList;