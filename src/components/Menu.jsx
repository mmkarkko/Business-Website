import "./Menu.css";
import { useEffect, useRef } from "react";
import MenuItem from "./MenuItem";
import { v4 as uuidv4 } from "uuid";
import { Trans, useTranslation } from 'react-i18next';

export default function Menu({ setIsMenuOpen }) {
  const menuItems = [{ text: <Trans i18nKey="home" key="i18n.language" />, link: "/"}, { text: <Trans i18nKey="services" key="i18n.language" />, link: "/Palvelut" }, { text: <Trans i18nKey="about" key="i18n.language" />, link: "/Tietoja"}];
  const menuRef = useRef();

  const { i18n } = useTranslation();

    // Click/touch outside the dropdown menu closes the dropdown menu
    useEffect(() => {
      const handleClickOutside = (event) => {
        // Check if click/touch target was icon or it's children
        const isClickOnIcon = event.target.closest('.menuItem');
  
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
