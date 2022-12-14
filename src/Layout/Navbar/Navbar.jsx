import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBg);
    setOpen(!open);
    // }
  }, []);

  return (
    <>
      <nav className={navbar ? "navbar active mx-auto px-16 fixed w-full z-20 top-0 left-0" : "navbar px-16 mx-auto fixed w-full z-20 top-0 left-0"}>
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <HashLink to="/#home" className="flex items-center" smooth>
            <img src={require("../../assets/J.PNG")} className="mr-3 h-3 sm:h-9" alt="Jirjatss Logo" />
          </HashLink>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => (setOpen(!open), setNavbar(true))}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>
          <div className={open ? "hidden w-full md:block md:w-auto " : "w-full md:block md:w-auto "} id="navbar-default">
            <ul className="flex  flex-col lg:h-10 p-4 mt-4 mb-4 bg-transparent rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 font-signika">
              <li>
                <HashLink to="/#about" className="block  pr-4 pl-3 text-gray-700 rounded  md:border-0 0 md:p-0" smooth>
                  About
                </HashLink>
              </li>
              <li>
                <HashLink to="/#education" className="block  pr-4 pl-3 text-gray-700 rounded  md:border-0 0 md:p-0" smooth>
                  Education
                </HashLink>
              </li>
              <li>
                <HashLink to="/#skills" className="block  pr-4 pl-3 text-gray-700 rounded  md:border-0 0 md:p-0" smooth>
                  Skills
                </HashLink>
              </li>
              <li>
                <HashLink to="/#contact" className="block  pr-4 pl-3 text-gray-700 rounded  md:border-0 0 md:p-0" smooth>
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
