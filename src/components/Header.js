import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/header-logo.png";
import searchIcon from "../images/icons/searchIcon.png";
import shopingCart from "../images/icons/shopping-cart.png";

import "./Header.css";
import { useAuth } from "../context/GlobalContext";
import { CgMenuRightAlt } from "react-icons/cg";

const Header = () => {
  const { currentUser, basket } = useAuth();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleNavMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const closeMenu = () => {
    setIsMenuVisible(false);
  };
  return (
    <header>
      <Link to={"/"} onClick={closeMenu}>
        <img className="logo" src={logo} alt="header logo" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img className="header-searchIcon" src={searchIcon} alt="search icon" />
      </div>
      <div
        className={`header-nav ${isMenuVisible ? "header-nav-toggle" : null}`}
      >
        <Link to={(currentUser && "/logout") || "/login"} onClick={closeMenu}>
          <div className="header-option">
            <span className="header-optionLineOne">
              hello {(currentUser && currentUser.email) || "Guest"}
            </span>
            <span className="header-optionLineTwo">
              {(currentUser && "sign out") || "sign in"}
            </span>
          </div>
        </Link>
        <Link onClick={closeMenu}>
          <div className="header-option">
            <span className="header-optionLineOne">Retruns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link>
          <div className="header-option" onClick={closeMenu}>
            <span className="header-optionLineOne">Your</span>
            <span className="header-optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to={"/cart"} onClick={closeMenu}>
          <div className="cart">
            <img className="cart-img" src={shopingCart} alt="shoping cart" />
            <span>{basket.length || ""}</span>
          </div>
        </Link>
      </div>
      <button className="nav-show-btn" onClick={handleNavMenu}>
        <CgMenuRightAlt />
      </button>
    </header>
  );
};

export default Header;
