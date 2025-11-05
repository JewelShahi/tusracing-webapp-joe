// src/components/TitleUpdater.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { routeTitles } from "../routesTitle";

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    // Force title update based on route
    const title = routeTitles[location.pathname] || "My Website";
    document.title = title;
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default TitleUpdater;
