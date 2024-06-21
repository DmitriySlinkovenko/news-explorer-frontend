import React from "react";
import { useState, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { IsOpenContext } from "../../contexts/IsOpenContext";

export default function SignInModal({ onCloseModal }) {
  const { isOpen, clickHandlers } = useContext(IsOpenContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginModalOpen } = isOpen;
  const { handleRegisterClick } = clickHandlers;

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    handleSignUp({ email, password, name, avatar });
    setEmail("");
    setPassword("");
    setName("");
    setAvatar("");
  }

  function SubmitButton() {
    if (password && email) {
      return (
        <button type="button" className="form__submit-btn">
          Sign In
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="form__submit-btn form__submit-btn_disabled"
          disabled
        >
          Sign In
        </button>
      );
    }
  }

  return (
    <>
      <ModalWithForm
        isOpen={loginModalOpen}
        handleModalClose={onCloseModal}
        handleSubmitForm={handleSubmitForm}
        title={"Sign In"}
      >
        <label className="form__label">
          Email
          <input
            type="text"
            name="email"
            id="login-email"
            onChange={handleEmailChange}
            placeholder="Enter email"
            className="form__input"
            required={true}
            value={email}
          />
        </label>
        <label className="form__label">
          Password
          <input
            className="form__input"
            type="password"
            name="password"
            id="login-password"
            placeholder="Enter password"
            onChange={handlePasswordChange}
            required={true}
            value={password}
          />
        </label>
        <SubmitButton />
        <button
          type="button"
          className="form__redirect-btn"
          onClick={handleRegisterClick}
        >
          or <span className="form__redirect-btn_span">Sign up</span>
        </button>
      </ModalWithForm>
    </>
  );
}
