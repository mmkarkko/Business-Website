import "./Header.css";
import Menu from "./Menu";
import { FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import logo from "../assets/arkkoMatic-logo-shadow_text-as-path-optimized.svg";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const location = useLocation();

  const { i18n } = useTranslation();

  useEffect(() => {
  }, [i18n.language]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language)
      .then(() => {
        localStorage.setItem('i18nextLng', language);
      })
      .catch((error) => {
        console.error("Language change error:", error);
      });
  };

  return (
    <div id="header">
      <div id="left-header">
        <div id="logo">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>
      </div>

      <div id="right-header">
        <div className="languages-container wide-languages">
          <select value={i18n.language} onChange={(e) => handleLanguageChange(e.target.value)}>
              <option value="fi">🇫🇮 Suomi</option>
              <option value="en">🇬🇧 English</option>
            </select>
        </div>
  
        <div id="burger-container">
          <div className="languages-container mobile-languages">
            <select 
              value={i18n.language} 
              onChange={(e) => handleLanguageChange(e.target.value)}
            >
              <option value="fi">🇫🇮</option>
              <option value="en">🇬🇧</option>
            </select>
          </div>
  
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
    </div>
  );
}
