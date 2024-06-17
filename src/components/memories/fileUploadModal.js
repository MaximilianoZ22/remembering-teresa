import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FileUploader } from "react-drag-drop-files";

const FileUploadModal = ({ show, handleClose, handleUpload }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Upload Images</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <FileUploader
        handleChange={handleUpload}
        name="file"
        multiple={true}
        types={[
          "JPG", "JPEG", "PNG", "GIF", "BMP", "WEBP", "HEIC", "HEIF", "TIFF", "TIF", "ICO", "SVG", "RAW", "CR2", "NEF", "ORF", "RAF", "SR2", "ARW", "DNG"
        ]}
      />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default FileUploadModal;
