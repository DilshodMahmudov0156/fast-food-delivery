import React from 'react';
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <div className="nav-container">
                <h2 className="logo">
                    Eat_On_Time
                </h2>
                <ul>
                    <Link to="/" className="my-nav-link">Asosiy</Link>
                    <Link to="/menyu" className="my-nav-link">Menyu</Link>
                    <Link to="/contact" className="my-nav-link">Bog'lanish</Link>
                    <Link to="/cart" className="cart-btn">
                        <button>
                            <i className="bi bi-cart4"></i>
                            <span className="my-badge">
                                1
                            </span>
                        </button>
                    </Link>
                    <button className="nav-btn">
                        <i className="bi bi-list"></i>
                    </button>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;