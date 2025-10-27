import React, { useEffect, useState } from "react";
import "./index.css";

const App = () => {
  const [theme, setTheme] = useState("blueDark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "blueDark" ? "light" : "blueDark"));
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content flex flex-col items-center justify-center gap-6 transition-colors duration-300">
      <h1 className="text-4xl font-bold text-primary">
        {theme === "blueDark" ? "💙 Blue Dark Theme" : "🌞 Light Theme"}
      </h1>

      <p className="text-lg">Click below to toggle themes</p>

      <button onClick={toggleTheme} className="btn btn-primary">
        Toggle Theme
      </button>

      <div className="flex gap-4 mt-6">
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-info">Info</button>
      </div>
    </div>
  );
}

export default App;
