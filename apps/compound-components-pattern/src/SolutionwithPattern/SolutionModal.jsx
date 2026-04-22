import React from "react";

export default function SolutionModal({ children, isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        {children}
        <button className="modal-close" onClick={onClose}>
          x
        </button>
      </div>
    </div>
  );
}

function ModalHeader({ children }) {
  return <div className="modal-header">{children}</div>;
}
function ModalBody({ children }) {
  return <div className="modal-body">{children}</div>;
}
function ModalFooter({ children }) {
  return <div className="modal-footer">{children}</div>;
}

SolutionModal.Header = ModalHeader;
SolutionModal.Body = ModalBody;
SolutionModal.Footer = ModalFooter;
