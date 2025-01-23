import "./Header.css";
import Menu from "./Menu";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import logo from "../assets/arkkoMatic-logo-shadow_text-as-path-optimized.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
        <div id="header">
          <div id="logo">
            <Link to="/"><img src={logo} alt="Logo" /></Link>
          </div>
          <div id="burger-container">
            {isMenuOpen ? <FiX className="menu-icon" onClick={handleMenuClick} /> : <FiMenu className="menu-icon" onClick={handleMenuClick}/>}
            {isMenuOpen ? <Menu setIsMenuOpen={setIsMenuOpen} /> : null }
          </div>
        </div>
    );
}
