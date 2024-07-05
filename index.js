import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SignUp from './components/SignUp/SignUp';
import Upload from './components/Upload/Upload';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import BlogPage1 from './components/BlogPages/BlogPage1';
import BlogPage5 from './components/BlogPages/BlogPage5';
import BlogPage4 from './components/BlogPages/BlogPage4';
import BlogPage3 from './components/BlogPages/BlogPage3';
import BlogPage2 from './components/BlogPages/BlogPage2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App />}></Route>
      <Route path = "/SignUp" element = {<SignUp />}></Route>
      <Route path = "/BlogPage1" element = {<BlogPage1 />}></Route>
      <Route path = "/BlogPage2" element = {<BlogPage2 />}></Route>
      <Route path = "/BlogPage3" element = {<BlogPage3 />}></Route>
      <Route path = "/BlogPage4" element = {<BlogPage4 />}></Route>
      <Route path = "/BlogPage5" element = {<BlogPage5 />}></Route>
      <Route path = "/Upload" element = {<Upload />}></Route>

     

    </Routes>
  </BrowserRouter>
);




