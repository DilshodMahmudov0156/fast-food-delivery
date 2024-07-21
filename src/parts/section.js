import React from 'react';
import img from "../images/header.png";


function Section() {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="my-card">
                            <img src={img} alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="my-card">
                            <img src={img} alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="my-card">
                            <img src={img} alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="my-card">
                            <img src={img} alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section;