// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about-us/About.jsx";
import Services from "./pages/services/Services.jsx";
import Contacts from "./pages/contacts/Contacts.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./index.css";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>

        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;