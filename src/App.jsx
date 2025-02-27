import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Center from "./pages/center";
import Online from "./pages/online";
import Campus from "./pages/campus";
import Business from "./pages/Business";
import Blog from "./components/Blog";
import Career from "./pages/Career";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/center" element={<Center />} />
        <Route path="/online" element={<Online />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/business" element={<Business />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
