import React, { useEffect, useState, useRef } from 'react';
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Spinner from 'react-bootstrap/Spinner';

const ImageGallery = ({ imageList }) => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(-1);
  const [key, setKey] = useState(0);
  const [loading, setLoading] = useState(true); // Add loading state
  const isFirstOpen = useRef(true);

  useEffect(() => {
    const loadImage = (url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          resolve({
            src: url,
            original: url,
            width: img.width,
            height: img.height,
          });
        };
        img.src = url;
      });
    };

    const loadImages = async () => {
      const imagePromises = imageList.map((url) => loadImage(url));
      const imagesData = await Promise.all(imagePromises);
      setImages(imagesData);
      setLoading(false); // Set loading to false when images are loaded
    };

    loadImages();
  }, [imageList]);

  useEffect(() => {
    if (index !== -1 && isFirstOpen.current) {
      setKey((prevKey) => prevKey + 1);
      isFirstOpen.current = false;
    }
  }, [index]);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index) => setIndex(index);
  const handleClose = () => {
    setIndex(-1);
    isFirstOpen.current = true; // Reset for the next open
  };
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div className="image-gallery">
      {loading ? ( // Show loading indicator if loading is true
        <div className="d-flex justify-content-center fade-out">
        <Spinner animation="border" variant="primary" className="custom-spinner" />
      </div>
      ) : (
        <>
          <Gallery images={images} onClick={handleClick} enableImageSelection={false} />
          {!!currentImage && (
            <Lightbox
              key={key}
              mainSrc={currentImage.original}
              nextSrc={nextImage.original}
              prevSrc={prevImage.original}
              onCloseRequest={handleClose}
              onMovePrevRequest={handleMovePrev}
              onMoveNextRequest={handleMoveNext}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ImageGallery;
