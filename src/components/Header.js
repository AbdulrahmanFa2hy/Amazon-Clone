import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/header-logo.png";
import searchIcon from "../images/icons/searchIcon.png";
import shopingCart from "../images/icons/shopping-cart.png";

import "./Header.css";
import { useAuth } from "../context/GlobalContext";
const Header = () => {
  const { currentUser, basket } = useAuth();
  return (
    <header>
      <Link to={"/"}>
        <img className="logo" src={logo} alt="header logo" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img className="header-searchIcon" src={searchIcon} alt="search icon" />
      </div>
      <div className="header-nav">
        <Link to={(currentUser && "/logout") || "/login"}>
          <div className="header-option">
            <span className="header-optionLineOne">
              hello {(currentUser && currentUser.email) || "Guest"}
            </span>
            <span className="header-optionLineTwo">
              {(currentUser && "sign out") || "sign in"}
            </span>
          </div>
        </Link>
        <Link to={"/orders"}>
          <div className="header-option">
            <span className="header-optionLineOne">Retruns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <Link to={"/cart"}>
          <div className="cart">
            <img className="cart-img" src={shopingCart} alt="shoping cart" />
            <span>{basket.length || ""}</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
