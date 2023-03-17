import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Project from './pages/Project';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Header>
        <Footer />
        </div>
    </Router>
  );
}

export default App;
