import "./Menu.css";
import { useEffect, useRef } from "react";
import MenuItem from "./MenuItem";
import { v4 as uuid } from "uuid";
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useMemo } from "react";

export default function Menu({ setIsMenuOpen }) {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const menuItems = useMemo(() => [
    { text: t("home"), link: "/" },
    { text: t("services"), link: `/${t("services").toLowerCase()}` },
    { text: t("about"), link: `/${t("about").toLowerCase()}` }
  ], [t]);

  useEffect(() => {
    const handleLanguageChange = () => {
      const currentPath = location.pathname.slice(1);
      if (!currentPath) return;

      window.setTimeout(() => {
        const currentMenuItem = menuItems.find(item => {
          const itemPath = item.link.slice(1); 
          return itemPath === currentPath;
        });

        if (currentMenuItem) {
          // use window.location.href to refresh the page
          window.location.href = currentMenuItem.link;
        }
      }, 100);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [menuItems, i18n, location.pathname]);

  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickOnIcon = event.target.closest('.menuItem');
      if (isClickOnIcon) return;
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
        <MenuItem key={uuid()} item={item} />
      ))}
    </div>
  );
}