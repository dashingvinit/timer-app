import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import "../css/modal.css";

function Modal({ open, onClose, children }) {
  const ref = useRef(null);

  if (!ref.current) ref.current = document.createElement("div");

  useEffect(() => {
    const modalRoot = document.getElementById("root");
    modalRoot.appendChild(ref.current);
    return () => modalRoot.removeChild(ref.current);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) onClose();
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <>
      <div className="modal">
        <button onClick={onClose}>Close</button>
        <div>{children}</div>
      </div>
    </>,
    ref.current
  );
}

export default Modal;
