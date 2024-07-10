import React from "react";
import "./About.css";
import images from "../../constants/images";

const About = () => {
  return (
    <section className="about section-p" id="about">
      <div className="container">
        <div className="about-content grid text-center">
          <div className="content-left">
            <img src={images.gestures} alt="" className="fadeinback-image" />
          </div>

          <div className="content-right">
            <div className="section-t">
              <h3>About Project</h3>
            </div>
            <p className="text">
              GestuSlide Master is a modern presentation tool that incorporates
              state-of-the-art computer vision and gesture recognition
              technologies. Its primary mission is to create an innovative and
              assistive technology solution that can change the presentation
              experience of educational systems and corporate organizations.
              This pioneering and groundbreaking technology can effectively
              interpret and respond to hand gestures and can create a new avenue
              for accessibility and engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
