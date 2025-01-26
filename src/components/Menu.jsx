import "./Menu.css";
import { useEffect, useRef } from "react";
import MenuItem from "./MenuItem";
import { v4 as uuidv4 } from "uuid";

export default function Menu({ setIsMenuOpen }) {
  const menuItems = [{ text: "Etusivu", link: "/"}, { text: "Palvelut", link: "./Palvelut" },];
  const menuRef = useRef();

    // Click/touch outside the dropdown menu closes the dropdown menu
    useEffect(() => {
      const handleClickOutside = (event) => {
        // Check if click/touch target was icon or it's children
        const isClickOnIcon = event.target.closest('.menu-icon');
  
        if (isClickOnIcon) {
          return;
        }
  
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('touchstart', handleClickOutside);
      };
    }, [setIsMenuOpen]);

  return (
    <div className="menu" ref={menuRef}>
      {menuItems.map((item) => (
        <MenuItem key={uuidv4()} item={item}  />
      ))}
    </div>
  );
}
