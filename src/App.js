import React from 'react'
import Home from './components/Home';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';

// Define an array of image objects with titles.


function App() {
  return (
    <div className="">
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
    </Routes>
  </div>
  );
}

export default App;