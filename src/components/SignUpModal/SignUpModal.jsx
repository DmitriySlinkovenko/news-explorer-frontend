import React from "react";
import { useState, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { IsOpenContext } from "../../contexts/IsOpenContext.js";

export default function SignUpModal({ onCloseModal, handleLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isOpen, clickHandlers } = useContext(IsOpenContext);
  const { registerModalOpen } = isOpen;
  const { handleLoginClick } = clickHandlers;

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    handleSignUp({ email, password, name, avatar });
    setEmail("");
    setPassword("");
    setName("");
  }

  function SubmitButton() {
    if (password && email && name) {
      return (
        <button type="button" className="form__submit-btn">
          Sign Up
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="form__submit-btn form__submit-btn_disabled"
          disabled
        >
          Sign Up
        </button>
      );
    }
  }

  return (
    <>
      <ModalWithForm
        isOpen={registerModalOpen}
        handleModalClose={onCloseModal}
        handleSubmitForm={handleSubmitForm}
        title={"Sign Up"}
      >
        <label className="form__label">
          Email
          <input
            type="text"
            name="email"
            id="register-email"
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
            id="register-password"
            placeholder="Enter password"
            onChange={handlePasswordChange}
            required={true}
            value={password}
          />
        </label>
        <label className="form__label">
          Username
          <input
            className="form__input"
            type="text"
            name="username"
            id="username"
            onChange={handleNameChange}
            placeholder="Enter your username"
            required={true}
            value={name}
            minLength={2}
            maxLength={30}
          />
        </label>
        <SubmitButton />
        <button
          type="button"
          className="form__redirect-btn"
          onClick={handleLoginClick}
        >
          or <span className="form__redirect-btn_span">Sign in</span>
        </button>
      </ModalWithForm>
    </>
  );
}
