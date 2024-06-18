import React, { useContext, useState } from "react";
import "./Nav.css";
import logout from "../../assets/logout.svg";
import { IsOpenContext } from "../../contexts/IsOpenContext";

export default function Nav({ isLoggedIn = false, currentUser = "Dmitriy" }) {
  const { toggleMobileModal } = useContext(IsOpenContext);

  return !isLoggedIn ? (
    <div className="nav">
      <div className="nav__container">
        <p className="nav__logo">NewsExplorer</p>
        <button className="nav__home-btn">Home</button>
        <button className="nav__sign-in-btn">Sign In</button>
        <button className="mobile-nav" onClick={toggleMobileModal}></button>
      </div>
    </div>
  ) : (
    <div className="nav">
      <div className="nav__container">
        <p className="nav__logo">NewsExplorer</p>
        <button className="nav__home-btn">Home</button>
        <button className="nav__home-btn">Saved Articles</button>
        <button className="nav__logout-btn">
          {currentUser}
          <img src={logout} className="nav__logout-icon"></img>
        </button>
      </div>
    </div>
  );
}
