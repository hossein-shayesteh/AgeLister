import React from "react";
import Card from "./Card";
import Button from "./Button";
import "./modal.css";

// Define the type for the Modal component's properties
type ModalProps = {
  title: string;
  message: string;
  onClose: () => void;
};

// The Modal component displays a modal with a title, message, and an "Okay" button to close it
const Modal: React.FC<ModalProps> = ({ title, message, onClose }) => (
  <>
    {/* Overlay for the backdrop */}
    <div className="backdrop" onClick={onClose}></div>

    {/* Modal structure using the Card component */}
    <Card className="modal">
      {/* Header containing the title */}
      <header className="header">
        <h2>{title}</h2>
      </header>

      {/* Content area for the message */}
      <div className="content">{message}</div>

      {/* Footer "Okay" button to close the modal */}
      <footer className="actions">
        <Button onClick={onClose}>okay</Button>
      </footer>
    </Card>
  </>
);

export default Modal;
