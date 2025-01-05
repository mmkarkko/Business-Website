import "./Header.css";
import Menu from "./Menu";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Header() {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
        <div className="header">
            {isMenuOpen ? <FiX className="menu-icon" onClick={handleMenuClick} /> : <FiMenu className="menu-icon" onClick={handleMenuClick}/>}
            {isMenuOpen ? <Menu setIsMenuOpen={setIsMenuOpen} /> : null }
        </div>
    );
}