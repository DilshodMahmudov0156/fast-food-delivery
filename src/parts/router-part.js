import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomePage from "./home-page";
import ProductsPage from "./products-page";
import CartPage from "./cart-page";
import Nav from "../components/nav";

function PagesPart() {
    return (
        <div className="router-part">
            <Nav/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/products" element={<ProductsPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
            </Routes>
        </div>
    );
}

export default PagesPart;