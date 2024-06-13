import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <p className="header__logo">NewsExplorer</p>
        <button className="header__home-btn">Home</button>
        <button className="header__sign-in-btn">Sign In</button>
      </div>
    </header>
  );
}
