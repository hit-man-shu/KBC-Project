import React, { forwardRef, useImperativeHandle, useRef } from "react";
import ReactDOM from "react-dom";

const Modal = forwardRef(({ children }, ref) => {
  const modal = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
    };
  });

  return ReactDOM.createPortal(
    <dialog ref={modal} className="modal">
      {children}
      <form method="dialog" className="modalForm">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;
