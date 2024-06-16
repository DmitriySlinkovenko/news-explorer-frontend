import React from "react";
import "./Header.css";
import logout from "../../assets/logout.svg";

export default function Header({ isLoggedIn = true, currentUser = "Dmitriy" }) {
  return !isLoggedIn ? (
    <header className="header">
      <div className="header__container">
        <p className="header__logo">NewsExplorer</p>
        <button className="header__home-btn">Home</button>
        <button className="header__sign-in-btn">Sign In</button>
      </div>
    </header>
  ) : (
    <header className="header">
      <div className="header__container">
        <p className="header__logo">NewsExplorer</p>
        <button className="header__home-btn">Home</button>
        <button className="header__home-btn">Saved Articles</button>
        <button className="header__logout-btn">
          {currentUser}
          <img src={logout} className="header__logout-icon"></img>
        </button>
      </div>
    </header>
  );
}
