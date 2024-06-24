import { useContext } from "react";
import "./MobileModal.css";
import { IsOpenContext } from "../../contexts/IsOpenContext";
import { Link } from "react-router-dom";

export default function MobileModal() {
  const { mobileIsOpen, toggleMobileModal, clickHandlers } =
    useContext(IsOpenContext);
  const { handleLoginClick } = clickHandlers;
  return (
    <div
      className={`mobile-modal ${mobileIsOpen ? "mobile-modal_active" : ""}`}
    >
      <div className="mobile-modal__container">
        <p className="mobile-modal__nav-logo">NewsExplorer</p>
        <button
          type="button"
          className="mobile-modal__close-btn"
          onClick={toggleMobileModal}
        ></button>
      </div>
      <div className="mobile-modal__button-container">
        <Link to="/">
          <button
            type="button"
            onClick={toggleMobileModal}
            className="mobile-modal__home-btn"
          >
            Home
          </button>
        </Link>

        <button
          type=" button"
          className="mobile-modal__sign-in-btn"
          onClick={handleLoginClick}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
