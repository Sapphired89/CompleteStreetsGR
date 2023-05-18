import './App.css';
import { Home } from "./pages/home"
import { Source } from "./pages/source";
import { Navbar } from "./navbar";
import { Graphic } from "./pages/graphic";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (

    <Router>
        <section className={"container_nav"}>
        <Navbar />
        </section>
      <Routes> 
        <Route path="/home" element={<Home />} />
        <Route path="/source" element={<Source />} />
        <Route path="/graphic" element={<Graphic />} />
      </Routes>
    </Router>
  );
};
export default App;