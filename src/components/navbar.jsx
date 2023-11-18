import React, { useState } from "react";
import "../components/navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  console.log("hello world", location.pathname);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-gray-600 mr-6 lg:mr-72">
        <Link to="/">
          <h2 className="text-3xl text-blue-600 font-semibold ">
            <span className="text-blue-800">M</span>arket
            <span className="text-blue-800">M</span>agnet
          </h2>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400 "
        >
          <div
            className={`fill-current text-3xl text-amber-600 ${
              isOpen ? "hidden" : "block"
            } hover:text-orange-600`}
          >
            <GiHamburgerMenu />
          </div>
          <div
            className={`fill-current text-2xl text-red-500 ${
              isOpen ? "block" : "hidden"
            } `}
          >
            <IoMdClose />
          </div>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm  lg:flex-grow">
          <ul className=" md:flex justify-end">
            <Link to="/insurance">
              <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-xl hover:text-amber-600">
                INSURENCE
              </li>
            </Link>
            <Link to="/aif">
              <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-xl hover:text-amber-600">
                WEALTH
              </li>
            </Link>
            {location.pathname === "/" && (
              <li>
                <a
                  href="#aboutus"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-xl hover:text-amber-600"
                >
                  About Us
                </a>
                <a
                  href="#portfolio"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-xl hover:text-amber-600"
                >
                  Portfolio
                </a>
              </li>
            )}

            <Link to="/becomepartner">
              <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-xl hover:text-amber-600">
                Become Partner
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
