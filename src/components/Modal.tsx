import React, { useEffect } from "react";

export default function Modal({
  children,
  closeModal,
}: {
  children: JSX.Element;
  closeModal: () => void;
}) {
  useEffect(() => {
    function close(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeModal();
      }
    }
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <div id="modal-container">
      <div id="modal-box">
        <button id="close-modal-btn" onClick={closeModal}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
