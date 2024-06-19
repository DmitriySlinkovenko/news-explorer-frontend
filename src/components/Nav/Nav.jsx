import React, { useContext, useState } from "react";
import "./Nav.css";
import logout from "../../assets/logout.svg";
import { IsOpenContext } from "../../contexts/IsOpenContext";
import { Link } from "react-router-dom";

export default function Nav({ isLoggedIn = true, currentUser = "Dmitriy" }) {
  const { clickHandlers, toggleMobileModal } = useContext(IsOpenContext);
  const { handleLoginClick, handleRegisterClick } = clickHandlers;

  return !isLoggedIn ? (
    <div className="nav">
      <div className="nav__container">
        <p className="nav__logo">NewsExplorer</p>
        <Link to="/">
          <button className="nav__home-btn">Home</button>
        </Link>

        <button className="nav__sign-in-btn" onClick={handleLoginClick}>
          Sign In
        </button>
        <button className="mobile-nav" onClick={toggleMobileModal}></button>
      </div>
    </div>
  ) : (
    <div className="nav">
      <div className="nav__container">
        <p className="nav__logo">NewsExplorer</p>
        <button className="nav__home-btn">Home</button>
        <Link to="/saved-news">
          <button className="nav__home-btn">Saved Articles</button>
        </Link>
        <button className="nav__logout-btn">
          {currentUser}
          <img
            src={logout}
            alt="Logout icon"
            className="nav__logout-icon"
          ></img>
        </button>
        <button className="mobile-nav" onClick={toggleMobileModal}></button>
      </div>
    </div>
  );
}
