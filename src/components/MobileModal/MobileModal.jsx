import { useContext } from "react";
import "./MobileModal.css";
import { IsOpenContext } from "../../contexts/IsOpenContext";
import { Link } from "react-router-dom";

export default function MobileModal() {
  const { mobileIsOpen, toggleMobileModal, clickHandlers } =
    useContext(IsOpenContext);
  const { handleLoginClick } = clickHandlers;
  return (
    <div className={`mobile ${mobileIsOpen ? "mobile_active" : ""}`}>
      <div className="mobile-header__container">
        <p className="mobile-nav__logo">NewsExplorer</p>
        <button
          type="button"
          className="modal__close-btn"
          onClick={toggleMobileModal}
        ></button>
      </div>
      <div className="mobile__button-container">
        <Link to="/">
          <button
            type="button"
            onClick={toggleMobileModal}
            className="mobile-nav__home-btn"
          >
            Home
          </button>
        </Link>

        <button
          type=" button"
          className="mobile-nav__sign-in-btn"
          onClick={handleLoginClick}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
