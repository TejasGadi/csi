import React from "react";
import "../stylesheets/Footer.css";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer">
                <div className="footer__quick_links">
                    Quick Links
                    <div className="links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/events">Events</Link>
                        </li>
                        <li>
                            <Link to="/team">Team</Link>
                        </li>
                    </div>
                </div>
                <div className="footer__social_media_links">
                    Follow Us
                    <div className="footer__icons">
                        <img src={instagram} />
                        <img src={facebook} />
                        <img src={youtube} />
                    </div>
                </div>
            </div>
            <p className="rights">All Rights are reserved to CSI, VIT Pune</p>
        </div>
    );
};

export default Footer;