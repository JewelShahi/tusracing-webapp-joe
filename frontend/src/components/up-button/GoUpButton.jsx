'use client'

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./goUpButton.css";

const GoUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
        setShowButton(true); // Display the button when scrolled more than 900px
      } else {
        setShowButton(false); // Hide the button when scrolled back up
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect to the top
    });
  };

  return (
    <a
      onClick={scrollToTop}
      className={`go-up-btn ${showButton ? "show" : ""}`} 
    >
      <FaArrowUp className="arrow" /> 
    </a>
  );
};

export default GoUpButton;