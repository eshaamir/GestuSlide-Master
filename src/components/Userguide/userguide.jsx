import React from "react";
import "./userguide.css"; // Import your CSS file
import images from "../../constants/images";

function Userguide() {
  return (
    <div id="guide">
      <h2 className="headings">GestuSlide Master</h2>
      <h3 className="headingss">Everything you need to know</h3>
      <div className="step">
        <img src={images.explore} alt="Step 1" />
        <div className="card">
          <p>
            <b>Explore the Features</b>
          </p>
          <p className="alignment">
            Explore the features of GestuSlide Master by clicking the{" "}
            <b>Features</b> link in the navbar
          </p>
        </div>
      </div>
      <div className="step">
        <img src={images.about} alt="Step 2" />
        <div className="card">
          <p>
            <b>About</b>
          </p>
          <p className="alignment">
            Get to know about our project by clicking the <b>About</b> link in
            the navbar{" "}
          </p>
        </div>
      </div>
      <div className="step">
        <img src={images.contactus} alt="Step 3" />
        <div className="card">
          <p>
            <b>Contact Us</b>
          </p>
          <p className="alignment">
            Connect with us or tell your feedbacks about our project by clicking
            the <b>Contact</b> link in the navbar{" "}
          </p>
        </div>
      </div>
      <div className="step">
        <img src={images.blog} alt="Step 4" />
        <div className="card">
          <p>
            <b>Blog</b>
          </p>
          <p className="alignment">
            Read upto date articles and blogs related by clicking the{" "}
            <b>Blog</b> link in the navbar{" "}
          </p>
        </div>
      </div>
      <div className="step">
        <img src={images.login} alt="Step 5" />
        <div className="card">
          <p>
            <b>Login or Signup</b>
          </p>
          <p className="alignment">
            Login as an existing user or join by signing into the system by
            clicking the <b>Get Started button</b> link in the navbar{" "}
          </p>
        </div>
      </div>
      <div className="step">
        <img src={images.camera} alt="Step 6" />
        <div className="card">
          <p>
            <b>Setup your Camera</b>
          </p>
          <p className="alignment">
            Setup your camera,upload your desired PPT and Enjoy your seamless
            navigations through your slides with GestuSlide
          </p>
        </div>
      </div>
    </div>
  );
}

export default Userguide;
