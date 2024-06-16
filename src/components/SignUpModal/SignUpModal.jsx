import React from "react";
import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

export default function SignUpModal({ onCloseModal, isOpen, handleLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    setAvatar("");
  }

  return (
    <>
      <ModalWithForm
        isOpen={false}
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
        <button type="submit" className="form__submit-btn">
          Sign Up
        </button>
        <button className="form__redirect-btn">
          or <span className="form__redirect-btn_span">Sign in</span>
        </button>
      </ModalWithForm>
    </>
  );
}
