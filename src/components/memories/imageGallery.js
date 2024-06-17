import React, { useEffect, useState } from 'react';
import { Gallery } from "react-grid-gallery";

const ImageGallery = ({ imageList }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImage = (url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          resolve({
            src: url,
            width: img.width,
            height: img.height,
            alt: "Uploaded Memory",
          });
        };
        img.src = url;
      });
    };

    const loadImages = async () => {
      const imagePromises = imageList.map((url) => loadImage(url));
      const imagesData = await Promise.all(imagePromises);
      setImages(imagesData);
    };

    loadImages();
  }, [imageList]);

  return (
    <div className="image-gallery">
      <Gallery images={images} />
    </div>
  );
};

export default ImageGallery;
