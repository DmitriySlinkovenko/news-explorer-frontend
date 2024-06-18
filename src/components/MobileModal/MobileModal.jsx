import React, { useContext } from "react";
import "./MobileModal.css";
import { IsOpenContext } from "../../contexts/IsOpenContext";

export default function MobileModal() {
  const { isOpen, toggleMobileModal } = useContext(IsOpenContext);
  return (
    <div className={`mobile ${isOpen ? "mobile_active" : ""}`}>
      <div className="mobile-header__container">
        <p className="mobile-nav__logo">NewsExplorer</p>
        <button
          className="modal__close-btn"
          onClick={toggleMobileModal}
        ></button>
      </div>
      <div className="mobile__button-container">
        <button className="mobile-nav__home-btn">Home</button>
        <button className="mobile-nav__sign-in-btn">Sign In</button>
      </div>
    </div>
  );
}
