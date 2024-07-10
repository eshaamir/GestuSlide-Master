import React from 'react';
import './BlogPages.css'; // Import the CSS file
import { bimg1} from './blogimports'; 

const BlogPage1 = () => {
    return (
        <div id="blog-post">
            <img src={bimg1} alt="Blog post" /> 
            
            <div class="container">
  <h1 class="heading">Introduction To Gesture Recognition In PowerPoint Presentations.</h1>
  <div class="content">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, rerum? Saepe rem dolorem debitis corporis et, ut nesciunt architecto corrupti soluta id cumque molestias assumenda similique itaque doloribus omnis sunt?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nihil provident accusantium distinctio aperiam quasi ex maxime non tenetur commodi? Iusto optio eveniet in. A itaque voluptatem veniam ab quia?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum vero quaerat a obcaecati laudantium praesentium iusto nisi corporis doloribus omnis, recusandae vel. Fugiat alias voluptate dolore dignissimos ex similique?</p>
  </div>
</div>

        </div>
    );
}

export default BlogPage1;
