import "./Header.css";
import Menu from "./Menu";
import { FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import logo from "../assets/arkkoMatic-logo-shadow_text-as-path-optimized.svg";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="header">
      <div id="logo">
        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>
      <div id="burger-container">
        {/* Show menu icon only on small screens */}
        <div className="menu-icon-container">
          {isMenuOpen ? (
            <FiX className="menu-icon" onClick={handleMenuClick} />
          ) : (
            <FiMenu className="menu-icon" onClick={handleMenuClick} />
          )}
        </div>
        {/* Conditionally render the Menu on small screens */}
        {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
      </div>

      {/* On large screens, the Menu is always visible as horizontal navigation */}
      <div className="desktop-menu">
        <Menu setIsMenuOpen={setIsMenuOpen} />
      </div>
    </div>
  );
}
