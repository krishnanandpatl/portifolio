import "../styles/modal.css";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  console.log(children);
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button type="button" onClick={handleClose}>
        &times;
        </button>
        {children}
      </section>
    </div>
  );
};

export default Modal;
