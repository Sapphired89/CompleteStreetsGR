import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './navbar';
import Home from './pages/home';
import Graphic from './pages/graphic';
import Form from './pages/form';

const App = () => {
  return (
    <Router>
      <div className="container_nav">
        <Navbar />
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/graphic" element={<Graphic />} />
        <Route path="/form" element={<Form />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
