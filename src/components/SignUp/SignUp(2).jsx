import React, { useState } from "react";
import "./SignUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AuthComponent() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const navigate = useNavigate();

  const handleSignUpMode = () => {
    setIsSignUpMode(true);
  };

  const handleSignInMode = () => {
    setIsSignUpMode(false);
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
  
    console.log('formData:', formData); // Log the FormData object
  
    axios.post('http://127.0.0.1:8000/register', formData)
      .then(result => {
        console.log(result);
        if (result.data === "Already registered") {
          alert("E-mail already registered! Please Login to proceed.");
          navigate('/signup');
        } else {
          alert("Registered successfully! Please Login to proceed.")
          navigate('/signup');
        }
      })
      .catch(err => console.log(err));
  }
  
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('password', password);
    
    axios.post('http://127.0.0.1:8000/login', formData)
        .then(result => {
            console.log(result);
            if (result.data === "Success") {
                console.log("Login Success");
                alert('Login successful!')
                navigate('/upload');
            } else {
                alert('Incorrect password! Please try again.');
            }
        })
        .catch(err => console.log(err));
  }

  return (
    <div className={`containerr ${isSignUpMode ? "sign-up-mode" : ""}`}>
     <div className="forms-containerr">
        <div className="signin-signup">
        {isSignUpMode ? (
          <form action="#" className="sign-up-form" onSubmit={handleRegisterSubmit} >
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user">
                <FontAwesomeIcon icon={faUser} />
              </i>
              <input
                type="text"
                placeholder="Username" value={name} name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope">
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              <input
                type="email"
                placeholder="Email" value={email} name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <FontAwesomeIcon icon={faLock} />
              </i>
              <input
                type="password"
                placeholder="Password" value={password} name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>
          ) : (
          
          <form action="#" className="sign-in-form" onSubmit={handleLoginSubmit}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <i className="fas fa-envelope">
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <input
                  type="text"
                  placeholder="UserName"
                  value={name}
                  name="username"
                  onChange={(e) => setName(e.target.value)}
                />
                </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <FontAwesomeIcon icon={faLock} />
              </i>
              <input type="password" placeholder="Password"  value={password} name="password"
                  onChange={(e) => setPassword(e.target.value)} />
            </div>
           
              <input type="submit" value="Login" className="btn solid" />
           
          </form>
          )}
        </div>
      </div>


      <div className="panels-containerr">
        <div className="panel left-panel">
          <div className="content">
            <h3>HEY MATE! NEW HERE?</h3>
            <h2>SO HURRY UP AND SIGN UP</h2>
            <p>Enter your details and lets get started.</p>
            <br></br>
            <center>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={handleSignUpMode}
              >
                Sign up
              </button>
            </center>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>HEY THERE!!</h3>
            <h4>Already have an Account?</h4>
            <br></br>
            <center>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={handleSignInMode}
              >
                Sign in
              </button>
            </center>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default AuthComponent;
