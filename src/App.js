import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './navbar';
import Home from './pages/home';
import Source from './pages/source';
import Graphic from './pages/graphic';

const App = () => {
  return (
    <Router>
      <div className="container_nav">
        <Navbar />
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/source" element={<Source />} />
        <Route path="/graphic" element={<Graphic />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
