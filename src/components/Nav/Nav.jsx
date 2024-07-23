import { useContext } from "react";
import "./Nav.css";
import logout from "../../assets/logout.svg";
import { IsOpenContext } from "../../contexts/IsOpenContext";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Nav({ profilePage }) {
  const { clickHandlers, toggleMobileModal, isLoggedIn, handleLogOut } =
    useContext(IsOpenContext);
  const currentUser = useContext(CurrentUserContext);
  const { handleLoginClick } = clickHandlers;
  const customClassName = ({ isActive }) =>
    "nav__home-btn" + (isActive ? " nav__home-btn_active" : "");
  return !isLoggedIn ? (
    <nav className="nav">
      <div className="nav__container">
        <p className="nav__logo">NewsExplorer</p>
        <NavLink to="/" className={customClassName}>
          Home
        </NavLink>

        <button
          className="nav__sign-in-btn"
          onClick={handleLoginClick}
          type="button"
        >
          Sign In
        </button>
        <button
          className="nav__mobile-nav"
          onClick={toggleMobileModal}
          type="button"
        ></button>
      </div>
    </nav>
  ) : (
    <nav className="nav">
      <div className="nav__container">
        <p className="nav__logo">NewsExplorer</p>
        <NavLink to="/" className={customClassName}>
          Home
        </NavLink>
        <NavLink
          to="/saved-news"
          className={customClassName}
          onClick={profilePage}
        >
          Saved Articles
        </NavLink>
        <button
          className="nav__logout-btn"
          type="button"
          onClick={handleLogOut}
        >
          {currentUser.name}
          <img
            src={logout}
            alt="Logout icon"
            className="nav__logout-icon"
          ></img>
        </button>
        <button
          className="nav__mobile-nav"
          onClick={toggleMobileModal}
          type="button"
        ></button>
      </div>
    </nav>
  );
}
