import Navbar from "../Navbar/Navbar";
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import hands from './hands.json'; // Import the animation JSON file
import "./Header.css";

const LottieAnimation = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: hands // Use the imported office variable here
    });
  }, []);

  return (
    <div className="lottie-container" ref={container}></div>
  );
}

const Header = () => {
  return (
    <header className="header flex flex-center flex-column">
      <Navbar />
      <div className="container">
        <div className="header-content text-center flex flex-column">
          <div className="header-text">
            <h2 className='text-uppercase header-title'>Redefining Presentations with Seamless Interaction</h2>
            <p className='text-lead'>Meet GestuSlide Master, a revolutionary presentation tool that transforms engagement. Powered by advanced computer vision and gesture recognition</p>
          </div>
        </div>
      </div>
      <LottieAnimation /> {/* Render the LottieAnimation component here */}
    </header>
  );
};

export default Header;
