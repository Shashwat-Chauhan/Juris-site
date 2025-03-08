import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import { Team } from "./pages/Team";
import { Blogs } from "./pages/Blogs";
import AboutPage from "./pages/About";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
  );
}

export default App;
