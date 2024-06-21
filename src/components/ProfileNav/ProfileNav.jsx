import React, { useContext } from "react";
import "./ProfileNav.css";
import logout from "../../assets/logout-black.svg";
import { NavLink } from "react-router-dom";
import { IsOpenContext } from "../../contexts/IsOpenContext";

export default function ProfileHeader({ currentUser = "Dmitriy" }) {
  const { toggleMobileModal } = useContext(IsOpenContext);
  const customClassName = ({ isActive }) =>
    "profile-nav__home-btn" + (isActive ? " profile-nav__home-btn_active" : "");
  return (
    <nav className="profile-nav">
      <div className="profile-nav__container">
        <p className="profile-nav__logo">NewsExplorer</p>
        <NavLink to="/" className={customClassName}>
          Home
        </NavLink>
        <NavLink to="/saved-news" className={customClassName}>
          Saved Articles
        </NavLink>
        <button className="profile-nav__logout-btn" type="button">
          {currentUser}
          <img
            src={logout}
            alt="Logout icon"
            className="profile-nav__logout-icon"
          ></img>
        </button>
        <button
          className="profile-nav__mobile-nav"
          onClick={toggleMobileModal}
          type="button"
        ></button>
      </div>
    </nav>
  );
}
