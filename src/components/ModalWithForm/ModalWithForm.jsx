import "./ModalWithForm.css";

export default function ModalWithForm({
  children,
  isOpen,
  handleModalClose,
  title,
  handleSubmitForm,
}) {
  return (
    <div className={`${isOpen ? "modal modal_opened" : "modal"}`}>
      <div className="modal__container">
        <form className="modal__form" onSubmit={handleSubmitForm}>
          <h3 className="modal__title">{title}</h3>
          <button
            type="button"
            className="modal__close-btn"
            onClick={handleModalClose}
          />
          {children}
        </form>
      </div>
    </div>
  );
}
