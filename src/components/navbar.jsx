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


            <Link to="/insurance">
              <li className="text-[#eee]">
                INSURENCE
              </li>
            </Link>
            
            <Link to="/aif">
              <li className="text-white">
                WEALTH
              </li>
            </Link>

            <a href="#aboutus">
              <li>ABOUT US</li>
            </a>

            <a href="#portfolio">
              <li>PORTFOLEO</li>
            </a>

          </ul>
        </div>

        {/* third class is here */}

        <div className="social-media">
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
