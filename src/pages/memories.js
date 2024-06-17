import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { FileUploader } from "react-drag-drop-files";
import '../css/service.css';
import { storage } from "../firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from 'uuid';

const desktopPoster = `${process.env.PUBLIC_URL}/assets/tsotuyo-desktop-tn.png`;
const mobilePoster = `${process.env.PUBLIC_URL}/assets/tsotuyo-mobile-tn.png`;

const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

export const Memories = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [imageList, setImageList] = useState([]);
  const [isIOSDevice, setIsIOSDevice] = useState(isIOS());
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const imageListRef = ref(storage, "images/");
    listAll(imageListRef).then((response) => {
      const fetchURLs = response.items.map((item) =>
        getDownloadURL(item)
      );
      Promise.all(fetchURLs).then((urls) => {
        setImageList(urls);
      });
    });
  }, []);

  const handleUpload = (files) => {
    const uploadPromises = Array.from(files).map((file) => {
      const imageRef = ref(storage, `images/${file.name + v4()}`);
      return uploadBytes(imageRef, file).then((snapshot) =>
        getDownloadURL(snapshot.ref)
      );
    });

    Promise.all(uploadPromises).then((urls) => {
      setImageList((prev) => [...prev, ...urls]);
      setShowModal(false);
      setShowToast(true);
    });
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleToastClose = () => setShowToast(false);

  return (
    <div className='body'>
      <Container className="service-container rubik-regular">
        <Row>
          <Col>
            <h1 style={{ fontSize: '70px', paddingLeft: "5%" }}>Memories</h1>
          </Col>
        </Row>
        <Row className="mb-4">
          <Button variant="primary" onClick={handleShow}>
            Upload Images
          </Button>

          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Upload Images</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FileUploader
                handleChange={handleUpload}
                name="file"
                types={["JPG", "PNG", "GIF"]}
                multiple={true}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
        <Row>
          {imageList.map((url, index) => (
            <img key={index} src={url} alt="Uploaded Memory" /> // Display each image
          ))}
        </Row>
      </Container>

      <ToastContainer position="bottom-end" className="p-3">
        <Toast show={showToast} onClose={handleToastClose} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Upload Successful</strong>
          </Toast.Header>
          <Toast.Body>Images have been uploaded successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Memories;
