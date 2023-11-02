import React, { useState } from "react";
import "../components/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      {/* first class */}

      
      <nav className="main-nav relative ">
        {/*logo is here*/}
        <div className="logo">
          <Link to="/">
            <h2>
              <span>M</span>arket
              <span>M</span>agnet
            </h2>
          </Link>
        </div>

        {/* second class */}

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link to="/insurance">INSURENCE</Link>
            </li>
            <li>
              <Link to="/aif">WEALTH</Link>
            </li>
          </ul>
        </div>

        {/* third class is here */}

        <div className="social-media">
          <ul className="social-media-desktop">
            <li className="facebook">
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li className="instagram">
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li className="facebook">
              <a href="#">
                <FaFacebook/>
              </a>
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
