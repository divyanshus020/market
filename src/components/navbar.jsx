import React, { useState } from "react";
import "../components/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTwitter } from "react-icons/fa";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      {/* first class */}
      <nav className="main-nav relative">
        {/*logo is here*/}
        <div className="logo">
          <h2>
            <span>M</span>arket
            <span>M</span>agnet
          </h2>
        </div>

        {/* second class */}

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <a href="#">INSURENCE</a>
            </li>
            <li>
              <a href="#">WEALTH</a>
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
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
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
