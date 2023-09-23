// Modal.js

import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, imgSrc }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="modal-content">
        <img src={imgSrc} alt="Image" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
