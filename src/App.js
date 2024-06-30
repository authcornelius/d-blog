import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/home';
import Blog from './pages/blog';
import NewPost from './pages/new-post';
import Login from './pages/login';
import Signup from './pages/signup';

function App() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/newpost" element={<NewPost />} />
          </Routes>
        </Router>
    );
}

export default App;
