import React, { useState } from 'react'
import '../components/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { GiHamburgerMenu } from 'react-icons/gi';
const Navbar = () => {
    const[showMediaIcons,setShowMediaIcons]=useState(false);
    return (
        <>
            {/* first class */}
            <nav className='main-nav'>

                {/*logo is here*/}
                <div className='logo'>
                    <h2>
                        <span>M</span>arket
                        <span>M</span>agnet
                    </h2>
                </div>

                {/* second class */}

                <div className= {showMediaIcons ? "menu-link mobile-menu-link": "menu-link"}>
                    <ul>
                        <li><a href='#'>INSURENCE</a></li>
                        <li><a href='#'>WEALTH</a></li>
                    </ul>
                </div>

                {/* third class is here */}

                <div className='social-media'>
                    <ul className='social-media-desktop'>
                        <li className='facebook'>
                            <a href="#"><faTwitter /></a>
                        </li>
                        <li>
                            <a href="#"><faTwitter /></a>
                        </li>
                        <li>
                            <a href="#"><faTwitter /></a>
                        </li>
                    </ul>
                    <div className='hamburger-menu'>
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