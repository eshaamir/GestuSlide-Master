import React from 'react';
import './article.css';
import { useNavigate } from 'react-router-dom';

const Article = ({ imgUrl, date, text, articleUrl }) => {
  const navigate = useNavigate();

  const handleReadArticle = () => {
    navigate("/BlogPages");
  };

  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p onClick={handleReadArticle} style={{ cursor: 'pointer' }}>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
