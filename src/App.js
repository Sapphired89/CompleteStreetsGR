import './App.css';
import { Home } from "./pages/home"
import { Source } from "./pages/source"; // Check if this path and component name are correct
import { Navbar } from "./navbar";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (

    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/home" element={<Home />} />
        <Route path="/source" element={<Source />} />
      </Routes>
    </Router>
  );
};
export default App;