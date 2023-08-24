import React, { useState } from "react";
import { Link } from "react-router-dom";
// IMAGES IMPORTS
import logo from "../assets/logo.png";
// COMPONENTS IMPORTS
import Showcase from "../components/Showcase";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  const HandleSmoothClick = (e) => {
    let howitworks = document.getElementById("howitworks");
    e.preventDefault();
    howitworks && howitworks.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="navigation-container">
        <div className="div">
          <div className="navigation-container__header">
            <img src={logo} alt="logo" className="header-img" />
            <h1 className="navigation-container__header-title">
              equ<span className="color">est.</span>
            </h1>
          </div>
          <ul className="navigation-container__links">
            <li className="navigation-container__link">
              <Link to="/howitworks" className="a" onClick={HandleSmoothClick}>
                How it works
              </Link>
            </li>
            <li className="navigation-container__link">
              <Link to="/about" className="a">
                About us
              </Link>
            </li>
            <li className="navigation-container__link">
              <Link to="/contact" className="a">
                Contact us
              </Link>
            </li>
            <li className="navigation-container__link">
              <Link to="/register" className="a main">
                GET STARTED
              </Link>
            </li>
          </ul>
        </div>
        {!isOpen ? (
          <div className="menu-open" onClick={handleOpenMenu}>
            <i className="fa-solid fa-bars"></i> MENU
          </div>
        ) : (
          <div className="menu-close" onClick={handleCloseMenu}>
            <i className="fa-solid fa-xmark"></i> ClOSE
          </div>
        )}
        {isOpen ? (
          <div className="menu-small">
            <div className="menu-small__inner">
              <div className="menu-close" onClick={handleCloseMenu}>
                <i className="fa-solid fa-xmark"></i> ClOSE
              </div>
            </div>
            <ul className="container__links">
              <li className="container__link">
                <Link to="" className="a">
                  How it works
                </Link>
              </li>
              <li className="container__link">
                <Link to="" className="a">
                  About us
                </Link>
              </li>
              <li className="container__link">
                <Link to="" className="a">
                  Contact us
                </Link>
              </li>
              <li className="container__link">
                <Link to="/register" className="a main">
                  GET STARTED
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
      <Showcase />
    </>
  );
};

export default Navigation;
