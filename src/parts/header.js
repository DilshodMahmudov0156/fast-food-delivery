import React from 'react';
import headerImg from "../images/header.png";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="header-container container-fluid">
                <div className="row align-items-center justify-content-lg-between justify-content-center">
                    <div className="text-side col-lg-6 text-center text-lg-left">
                        <h1>
                            Mazali Taomlarimiz <br/> <span className="text-red">sizni</span> kutmoqda!
                        </h1>
                        <p>
                            Haftaning eng yaxshi taomlaridan <br/> tatib ko'ring!
                        </p>
                            <Link to="/products" className="menu-btn">
                                Menyuni Ko'rish <span className="right-sign"><i className="bi bi-arrow-right"></i></span>
                            </Link>
                    </div>
                    <div className="col-lg-5 col-md-9">
                        <img src={headerImg} alt="" className="header-image"/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;