import { useState, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { IsOpenContext } from "../../contexts/IsOpenContext.js";

export default function SignUpModal({ onCloseModal, handleSignUp }) {
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
    console.log("Submitted");
    handleSignUp({ name, email, password });
    setEmail("");
    setPassword("");
    setName("");
  }

  function SubmitButton() {
    if (password && email && name) {
      return (
        <button type="submit" className="modal__submit-btn">
          Sign Up
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="modal__submit-btn modal__submit-btn_disabled"
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
        <label className="modal__form-label">
          Email
          <input
            type="text"
            name="email"
            id="register-email"
            onChange={handleEmailChange}
            placeholder="Enter email"
            className="modal__form-input"
            required={true}
            value={email}
          />
        </label>
        <label className="modal__form-label">
          Password
          <input
            className="modal__form-input"
            type="password"
            name="password"
            id="register-password"
            placeholder="Enter password"
            onChange={handlePasswordChange}
            required={true}
            value={password}
          />
        </label>
        <label className="modal__form-label">
          Username
          <input
            className="modal__form-input"
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
          className="modal__redirect-btn"
          onClick={handleLoginClick}
        >
          or <span className="modal__redirect-span">Sign in</span>
        </button>
      </ModalWithForm>
    </>
  );
}
