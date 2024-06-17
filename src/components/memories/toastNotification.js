import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const ToastNotification = ({ showToast, handleToastClose }) => (
  <ToastContainer position="bottom-end" className="p-3">
    <Toast show={showToast} onClose={handleToastClose} delay={3000} autohide>
      <Toast.Header>
        <strong className="me-auto">Upload Successful</strong>
      </Toast.Header>
      <Toast.Body>Images have been uploaded successfully!</Toast.Body>
    </Toast>
  </ToastContainer>
);

export default ToastNotification;
