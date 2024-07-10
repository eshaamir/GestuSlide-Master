import React from "react";
import { Link } from "react-router-dom";
import Article from "../article/Article";
import { bimg1, bimg2, bimg3, bimg4, bimg5 } from "./imports";
import "./Blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Link to="/BlogPage1">
          <Article
            imgUrl={bimg1}
            date="March 06, 2024"
            text="Introduction to Gesture Recognition in PowerPoint Presentations."
          />
        </Link>
      </div>
      <div className="gpt3__blog-container_groupB">
        <Link to="/BlogPage2">
          <Article
            imgUrl={bimg2}
            date="April 16, 2024"
            text="The Evolution of Gesture Recognition Technology"
          />
        </Link>

        <Link to="/BlogPage3">
          <Article
            imgUrl={bimg3}
            date="May 19, 2024"
            text="Overcoming Challenges in Gesture Recognition"
          />
        </Link>
        <Link to="/BlogPage4">
          <Article
            imgUrl={bimg4}
            date="May 26, 2024"
            text="Future Trends in Gesture Recognition for Presentations"
          />
        </Link>
        <Link to="/BlogPage5">
          <Article
            imgUrl={bimg5}
            date="June 6, 2024"
            text="Tips for Using Gesture Recognition in PowerPoint Effectively"
          />
        </Link>
      </div>
    </div>
  </div>
);

export default Blog;
