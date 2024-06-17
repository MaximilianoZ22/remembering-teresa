import React from 'react';

const ImageGallery = ({ imageList }) => (
  <div className="image-gallery">
    {imageList.map((url, index) => (
      <img key={index} src={url} alt="Uploaded Memory" /> // Display each image
    ))}
  </div>
);

export default ImageGallery;
