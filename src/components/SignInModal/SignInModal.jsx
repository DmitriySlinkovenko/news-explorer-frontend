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
    setEmail("");
    setPassword("");
  }

  function SubmitButton() {
    if (password && email) {
      return (
        <button type="button" className="modal__submit-btn">
          Sign In
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="modal__submit-btn modal__submit-btn_disabled"
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
        <label className="modal__form-label">
          Email
          <input
            type="text"
            name="email"
            id="login-email"
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
          className="modal__redirect-btn"
          onClick={handleRegisterClick}
        >
          or <span className="modal__redirect-span">Sign up</span>
        </button>
      </ModalWithForm>
    </>
  );
}
