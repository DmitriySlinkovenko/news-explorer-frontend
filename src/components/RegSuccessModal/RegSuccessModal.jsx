import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegSuccessModal.css";

export default function RegSuccessModal({ onCloseModal, isOpen }) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      title={"Registration sucessfully completed"}
      redirectText={"Sign In"}
      onCloseModal={onCloseModal}
    >
      <button className="form__redirect-btn form__redirect-btn_position">
        <span className="form__redirect-btn_span">Sign in</span>
      </button>
    </ModalWithForm>
  );
}
