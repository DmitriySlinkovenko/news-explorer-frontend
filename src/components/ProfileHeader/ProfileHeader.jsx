import React, { useContext } from "react";
import "./ProfileHeader.css";
import logout from "../../assets/logout-black.svg";
import { Link } from "react-router-dom";
import { IsOpenContext } from "../../contexts/IsOpenContext";

export default function ProfileHeader({ currentUser = "Dmitriy" }) {
  const { toggleMobileModal } = useContext(IsOpenContext);
  return (
    <header className="profile-header">
      <div className="profile-header__container">
        <p className="profile-header__logo">NewsExplorer</p>
        <Link to="/">
          <button className="profile-header__home-btn">Home</button>
        </Link>
        <button className="profile-header__home-btn">Saved Articles</button>
        <button className="profile-header__logout-btn">
          {currentUser}
          <img
            src={logout}
            alt="Logout icon"
            className="profile-header__logout-icon"
          ></img>
        </button>
        <button
          className="profile-header__mobile-nav"
          onClick={toggleMobileModal}
        ></button>
      </div>
    </header>
  );
}
