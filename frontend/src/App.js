import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./theme-manager/ThemeContext";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about-us/About.jsx";
import Cars from "./pages/about-us/cars/Cars.jsx";
import Team from "./pages/about-us/team/Team.jsx";
import History from "./pages/about-us/history/History.jsx";
import JoinUs from "./pages/about-us/join-us/JoinUs.jsx";
import Sponsors from "./pages/sponsors/Sponsors.jsx";
import Contacts from "./pages/contacts/Contacts.jsx";
import Gallery from "./pages/gallery/Gallery.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import Footer from "./components/footer/Footer.jsx";
import GoUpButton from "./components/up-button/GoUpButton.jsx";
import TitleUpdater from "./components/title-updater/TitleUpdater";
import Loader from "./components/loader/Loader";
import "./index.css";

// Loader wrapper to handle exceptions for Home page
const AppWrapper = () => {
  const location = useLocation();
  // Initialize loading state based on current path
  const [loading, setLoading] = useState(location.pathname !== "/");

  useEffect(() => {
    // If it's the Home page, never show the loader
    if (location.pathname === "/") {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) return <Loader />;

  return (
    <>
      <TitleUpdater />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/our-cars" element={<Cars />} />
        <Route path="/about/our-team" element={<Team />} />
        <Route path="/about/our-history" element={<History />} />
        <Route path="/about/join-us" element={<JoinUs />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GoUpButton />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppWrapper />
      </Router>
    </ThemeProvider>
  );
};

export default App;