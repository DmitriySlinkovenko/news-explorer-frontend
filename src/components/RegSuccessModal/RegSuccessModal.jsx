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
      <button className="modal__redirect-btn modal__redirect-btn_position">
        <span className="modal__redirect-span">Sign in</span>
      </button>
    </ModalWithForm>
  );
}
