import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdRocket } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const navHandler = () => {
    setNavToggle((prevData) => !prevData);
  };

  return (
    <nav className="navbar w-100 flex">
      <div className="container w-100">
        <div className="navbar-content flex fw-7">
          <div className="brand-and-toggler flex flex-between w-100">
            <Link to="/" className="navbar-brand fs-26">
              GestuSlide Master
            </Link>
            <div
              type="button"
              className={`hamburger-menu ${
                navToggle ? "hamburger-menu-change" : ""
              }`}
              onClick={navHandler}
            >
              <div className="bar-top"></div>
              <div className="bar-middle"></div>
              <div className="bar-bottom"></div>
            </div>
          </div>

          <div
            className={`navbar-collapse ${
              navToggle ? "show-navbar-collapse" : ""
            }`}
          >
            <div className="navbar-collapse-content">
              <ul className="navbar-nav">
                <li className="text-white">
                  <a href="#services">Features</a>
                </li>

                {/* Team Section */}
                <li className="text-white">
                  <a href="#about">About</a>
                </li>

                <li className="text-white">
                  <a href="#blog">Blog</a>
                </li>
                <li className="text-white">
                  <a href="#features">FAQ</a>
                </li>
                <li className="text-white">
                  <a href="#guide">Guide</a>
                </li>
                <li className="text-white">
                  <a href="#contact">Contact</a>
                </li>
              </ul>

              <div className="navbar-btns">
                <Link to="/SignUp" className="btn">
                  <IoMdRocket /> <span>get started</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
