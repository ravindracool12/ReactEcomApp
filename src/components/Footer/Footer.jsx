import React from "react";
import "./Footer.scss";

import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
    return (
        <Footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Voluptatem sccusantium doloremque laudantium, totam rem
                        aperiam,eaque ipsa wuae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo eaque
                        ispa quae ab illo.
                    </div>
                </div>
                <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                        Kalyan Rd, new Delhi
                        New Delhi
                    </div>
                </div>
                </div>
                <div className="col"><div className="title">Categories</div></div>
                <div className="col"><div className="title">Pages</div></div>
            </div>
        </Footer>
    );
};

export default Footer;
