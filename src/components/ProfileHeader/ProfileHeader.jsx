import React from "react";
import "./ProfileHeader.css";
import logout from "../../assets/logout-black.svg";

export default function ProfileHeader({ currentUser = "Dmitriy" }) {
  return (
    <header className="profile__header">
      <div className="profile__header__container">
        <p className="profile__header__logo">NewsExplorer</p>
        <button className="profile__header__home-btn">Home</button>
        <button className="profile__header__home-btn">Saved Articles</button>
        <button className="profile__header__logout-btn">
          {currentUser}
          <img src={logout} className="profile__header__logout-icon"></img>
        </button>
      </div>
    </header>
  );
}
