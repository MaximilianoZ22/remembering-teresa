import React from 'react';
import '../css/home.css';

const desktopVid = `${process.env.PUBLIC_URL}/assets/tsotuyo-desktop.mp4`;
const mobileVid = `${process.env.PUBLIC_URL}/assets/tsotuyo-mobile.mp4`;

export const Home = () => {
  console.log("DESKTOP: ", desktopVid)
  return (
    <div className="home-container">
      <video className="video-background" autoPlay loop muted>
        <source src={mobileVid} type="video/mp4" media="(max-width: 768px)" />
        <source src={desktopVid} type="video/mp4" media="(min-width: 769px)" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Home;
