import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setIsSearchClicked(!isSearchClicked);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-title" onClick={() => handleNavigation("/")}>
          <a href="/">
            <h1>RIDEAXIS</h1>
          </a>
        </div>
        <div className="navbar-items">
          <p onClick={() => handleNavigation("/bikes")}>BIKES</p>
          {/* <p onClick={() => handleNavigation("/explore")}>EXPLORE</p> */}
          <p onClick={() => handleNavigation("/coalition")}>COALITION</p>
          <p onClick={() => handleNavigation("/about")}>ABOUT</p>
        </div>
        <div className="navbar-icons">
          <span
            className="material-icons navbar-icon"
            onClick={handleSearchClick}
          >
            <CiSearch />
          </span>
          <span
            className="material-icons navbar-icon"
            onClick={() => handleNavigation("/cart")}
          >
            <CiShoppingCart />
          </span>
          <span
            className="material-icons navbar-icon"
            onClick={() => handleNavigation("/profile")}
          >
            <CiUser />
          </span>
        </div>
        {isSearchClicked && (
          <div className="search-field">
            <input type="text" placeholder="Search..." />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
