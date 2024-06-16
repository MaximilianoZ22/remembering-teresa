import React, { useEffect, useState } from 'react';
import '../css/home.css';

const desktopVid = `${process.env.PUBLIC_URL}/assets/tsotuyo-desktop-noaudio-1080.mp4`;
const desktopPoster = `${process.env.PUBLIC_URL}/assets/tsotuyo-desktop-tn.png`;
const mobileVid = `${process.env.PUBLIC_URL}/assets/tsotuyo-mobile-noaudio-1080.mp4`;
const mobilePoster = `${process.env.PUBLIC_URL}/assets/tsotuyo-mobile-tn.png`;

const isIOS = () => {
  return (
    /iPad|iPhone/.test(navigator.userAgent) && !window.MSStream
  );
};

export const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isIOSDevice, setIsIOSDevice] = useState(isIOS());

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="home-container">
      {isIOSDevice ? (
        <img
          src={isMobile ? mobilePoster : desktopPoster}
          alt="Poster"
          className="video-background"
        />
      ) : (
        <video
          className="video-background"
          muted
          playsInline
          autoPlay
          loop
          poster={isMobile ? mobilePoster : desktopPoster}
        >
          <source src={isMobile ? mobileVid : desktopVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

export default Home;
