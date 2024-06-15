import React from 'react';
import '../css/home.css';
import desktopVid from "../assets/Blue Floral In Loving Memory Tribute Video.mp4";
import mobileVid from "../assets/Blue Floral In Loving Memory Tribute Video (Mobile Video).mp4"
// import mobileVid from "../assets/Blue Floral In Loving Memory Tribute Video - Mobile.mp4";

export const Home = () => {
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
