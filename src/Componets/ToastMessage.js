import React from "react";
import Alert from "react-bootstrap/Alert";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

export default function ToastMessage({ alertShow, resetAlert }) {
  return (
    <ToastContainer className="p-3" position="top-end">
      <Toast
        onClose={() => resetAlert(0)}
        show={alertShow.status}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <strong className="me-auto">{alertShow.heading}</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>
          <Alert variant={alertShow.variant}>{alertShow.mesage}</Alert>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
