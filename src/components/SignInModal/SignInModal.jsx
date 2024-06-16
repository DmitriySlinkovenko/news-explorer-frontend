import React from "react";
import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function SignInModal({ onCloseModal, isOpen, handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <>
      <ModalWithForm
        isOpen={isOpen}
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
        <button type="submit" className="form__submit-btn">
          Sign In
        </button>
        <button className="form__redirect-btn">
          or <span className="form__redirect-btn_span">Sign up</span>
        </button>
      </ModalWithForm>
    </>
  );
}
