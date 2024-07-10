import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import Webcam from "react-webcam";
import * as handpose from "@tensorflow-models/handpose";
import * as tf from "@tensorflow/tfjs";
import * as fp from "fingerpose";
import { drawHand } from "./utils";
import ThumbsDownGesture from "./gestures/ThumbsDown.js";
import MiddleFingerGesture from "./gestures/MiddleFinger.js";
import OKSignGesture from "./gestures/OKSign.js";
import PinchedFingerGesture from "./gestures/PinchedFinger.js";
import PinchedHandGesture from "./gestures/PinchedHand.js";
import RaisedHandGesture from "./gestures/RaisedHand.js";
import LoveYouGesture from "./gestures/LoveYou.js";
import RockOnGesture from "./gestures/RockOn.js";
import CallMeGesture from "./gestures/CallMe.js";
import PointUpGesture from "./gestures/PointUp.js";
import PointDownGesture from "./gestures/PointDown.js";
import PointRightGesture from "./gestures/PointRight.js";
import PointLeftGesture from "./gestures/PointLeft.js";
import RaisedFistGesture from "./gestures/RaisedFist.js";
import victory from "./img/victory.png";
import thumbs_up from "./img/thumbs_up.png";
import thumbs_down from "./img/thumbs_down.png";
import middle_finger from "./img/middle_finger.png";
import ok_sign from "./img/ok_sign.png";
import pinched_finger from "./img/pinched_finger.png";
import pinched_hand from "./img/pinched_hand.png";
import raised_hand from "./img/raised_hand.png";
import love_you from "./img/love_you.png";
import rock_on from "./img/rock_on.png";
import call_me from "./img/call_me.png";
import point_up from "./img/point_up.png";
import point_down from "./img/point_down.png";
import point_left from "./img/point_left.png";
import point_right from "./img/point_right.png";
import raised_fist from "./img/raised_fist.png";
import "./Upload.css"; // Import your CSS file

const ImageSlider = ({
  imageLinks,
  currentImageIndex,
  setCurrentImageIndex,
  updateParentIndex,
}) => {
  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    updateParentIndex(index); // Call the function to update currentIndex in the parent component
  };

  useEffect(() => {
    updateParentIndex(currentImageIndex); // Update currentIndex in the parent component whenever it changes
  }, [currentImageIndex, updateParentIndex]);

  return (
    <div className="slider-container" style={{ height: "70vh", width: "100%" }}>
      <div className="row">
        <div className="col">
          <img
            src={imageLinks[currentImageIndex]}
            alt={"Slide ${currentImageIndex + 1}"}
          />
        </div>
      </div>
      <div className="row">
        {imageLinks.map((link, index) => (
          <div className="col-md-1" key={index}>
            <img
              src={link}
              alt={"Slide ${index + 1}"}
              className="img-thumbnail"
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const FileUploader = () => {
  const [fileName, setFileName] = useState("");
  const [isDragActive, setIsDragActive] = useState(false);
  const [imageLinks, setImageLinks] = useState([]);
  const [showCamera, setShowCamera] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emoji, setEmoji] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const videoRef = useRef(null);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const modelRef = useRef(null);

  // Define the handleNext and handlePrev functions
  const handleNext = () => {
    const newIndex = (currentImageIndex + 1) % imageLinks.length;
    setCurrentImageIndex(newIndex, () => {
      console.log("New index (Next):", newIndex);
      alert(newIndex);
    });
  };

  const handlePrev = () => {
    const newIndex =
      (currentImageIndex - 1 + imageLinks.length) % imageLinks.length;
    setCurrentImageIndex(newIndex, () => {
      console.log("New index (Prev):", newIndex);
      alert(newIndex);
    });
  };

  // Function to update currentIndex from ImageSlider
  const updateParentIndex = (index) => {
    setCurrentImageIndex(index);
  };
  // handleNext();

  const images = {
    thumbs_up: thumbs_up,
    victory: victory,
    thumbs_down: thumbs_down,
    middle_finger: middle_finger,
    ok_sign: ok_sign,
    pinched_finger: pinched_finger,
    pinched_hand: pinched_hand,
    raised_hand: raised_hand,
    love_you: love_you,
    rock_on: rock_on,
    call_me: call_me,
    point_up: point_up,
    point_down: point_down,
    point_left: point_left,
    point_right: point_right,
    raised_fist: raised_fist,
  };

  useEffect(() => {
    const setupTfjsBackend = async () => {
      await tf.setBackend("webgl");
      await tf.ready();
    };

    const loadModel = async () => {
      await setupTfjsBackend();
      modelRef.current = await handpose.load();
      console.log("Handpose model loaded");
    };
    loadModel();

    const detect = async () => {
      if (
        webcamRef.current &&
        webcamRef.current.video.readyState === 4 &&
        modelRef.current
      ) {
        const video = webcamRef.current.video;
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;

        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;

        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        const hand = await modelRef.current.estimateHands(video);

        if (hand.length > 0) {
          const GE = new fp.GestureEstimator([
            fp.Gestures.VictoryGesture,
            fp.Gestures.ThumbsUpGesture,
            ThumbsDownGesture,
            MiddleFingerGesture,
            OKSignGesture,
            PinchedFingerGesture,
            PinchedHandGesture,
            RaisedHandGesture,
            LoveYouGesture,
            RockOnGesture,
            CallMeGesture,
            PointRightGesture,
            PointUpGesture,
            PointLeftGesture,
            PointDownGesture,
            RaisedFistGesture,
          ]);

          const gesture = await GE.estimate(hand[0].landmarks, 8);
          if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
            const confidence = gesture.gestures.map(
              (prediction) => prediction.score
            );
            const maxConfidence = confidence.indexOf(
              Math.max.apply(null, confidence)
            );
            setEmoji(gesture.gestures[maxConfidence].name);
            const detectedGesture = gesture.gestures[maxConfidence].name;

            // Call slider navigation based on gesture
            if (detectedGesture === "thumbs_up") {
              handleNext();
            } else if (detectedGesture === "thumbs_down") {
              handlePrev();
            }
          }
        }

        const ctx = canvasRef.current.getContext("2d");
        drawHand(hand, ctx);
      }
    };

    const intervalId = setInterval(detect, 1000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  const uploadFile = (formData) => {
    console.log("formData:", formData);

    setLoading(true);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:8000/convert-ppt-to-images/", true);

    xhr.onload = function () {
      setLoading(false);

      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        setImageLinks(response.image_links);
        setShowCamera(true);
      } else {
        console.error("Error:", xhr.statusText);
      }
    };

    xhr.onerror = function () {
      setLoading(false);
      console.error("Request failed");
    };

    xhr.send(formData);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setFileName(file.name);

    const formData = new FormData();
    formData.append("file", file);

    uploadFile(formData);

    console.log("file:", file);
  };

  const handleDragEnter = () => {
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  return (
    <div>
      {loading && (
        <div className="preloader">
          <div className="spinner"></div>
        </div>
      )}
      {imageLinks.length === 0 ? (
        <div className="file-container">
          <div className="file-overlay"></div>
          <div className="file-wrapper">
            <input
              id="js-file-input"
              type="file"
              className="file-input"
              onChange={handleFileInputChange}
            />
            <div
              className={`file-content ${
                isDragActive ? "file-input--active" : ""
              }`}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
            >
              <div className="file-infos">
                <div className="file-icon">
                  <FontAwesomeIcon icon={faFileUpload} className="fa-7x" />
                  <span className="icon-shadow"></span>
                  <span>
                    Click to browse
                    <span className={isDragActive ? "has-drag" : ""}>
                      or drop file here
                    </span>
                  </span>
                </div>
              </div>
              <p id="js-file-name" className="file-name">
                {fileName ? fileName : "No file selected"}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Container>
          <Row>
            <Col md={6}>
              <ImageSlider
                imageLinks={imageLinks}
                currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex}
                updateParentIndex={updateParentIndex} // Pass the function to update currentIndex
              />
            </Col>
            <Col
              md={6}
              style={{
                position: "relative",
              }}
            >
              <Webcam
                ref={webcamRef}
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  zIndex: 9,
                  width: 640,
                  height: 480,
                }}
              />
              <canvas
                ref={canvasRef}
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  zIndex: 9,
                  width: 640,
                  height: 480,
                }}
              />

              {emoji !== null ? (
                <img
                  src={images[emoji]}
                  style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 400,
                    bottom: 500,
                    right: 0,
                    textAlign: "center",
                    height: 100,
                    width: 100,
                    zIndex: 100,
                  }}
                />
              ) : (
                ""
              )}
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default FileUploader;
