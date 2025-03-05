import { useRef, useEffect } from "react";
import "../css/modal.css";

function Modal({ open, onClose, children }) {
  const ref = useRef(null);

  if (!open) return null;

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

  return (
    <div className="modal">
      <button onClick={onClose}>Close</button>
      <div>{children}</div>
    </div>
  );
}

export default Modal;
