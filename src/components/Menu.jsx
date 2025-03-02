import "./Menu.css";
import { useEffect, useRef } from "react";
import MenuItem from "./MenuItem";
import { v4 as uuid } from "uuid";
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo } from "react";

export default function Menu({ setIsMenuOpen }) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef();
  
  const menuItems = useMemo(() => [
    { text: t("home"), link: "/" },
    { text: t("services"), link: `/${t("services").toLowerCase()}` },
    { text: t("about"), link: `/${t("about").toLowerCase()}` }
  ], [t]);

  useEffect(() => {
    // Function to update URL when language changes
    const handleLanguageChange = () => {
      const currentPath = location.pathname.slice(1);
      
      if (!currentPath) return;
      
      // Go through all languages and compare their URL equivalents
      const availableLanguages = Object.keys(i18n.services.resourceStore.data);
      
      // Find which page we're on by comparing URL forms across all languages
      let currentSection = '';
      
      for (const lang of availableLanguages) {
        const i18nInstance = i18n.cloneInstance({ lng: lang });
        const servicesInLang = i18nInstance.t("services").toLowerCase();
        const aboutInLang = i18nInstance.t("about").toLowerCase();
        
        if (currentPath === servicesInLang) {
          currentSection = 'services';
          break;
        } else if (currentPath === aboutInLang) {
          currentSection = 'about';
          break;
        }
      }
      
      // If a page was identified, navigate to the corresponding target in the current language
      if (currentSection) {
        const newPath = currentSection === 'home' 
          ? '/' 
          : `/${t(currentSection).toLowerCase()}`;
          
        navigate(newPath, { replace: true });
      }
    };

    // Register event handler for language change
    i18n.on('languageChanged', handleLanguageChange);
    
    // Clean up event listener when component unmounts
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [menuItems, i18n, location.pathname, navigate, t]);

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is inside a MenuItem component
      const isMenuItem = event.target.closest('.menuItem');
      
      // If the click is inside a MenuItem component, do nothing
      if (isMenuItem) {
        return;
      }
      
      // Otherwise, check if the click is outside the menu
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsMenuOpen]);

  return (
    <div className="menu" ref={menuRef}>
      {menuItems.map((item) => (
        <MenuItem 
          key={uuid()} 
          item={item} 
          setIsMenuOpen={setIsMenuOpen}
        />
      ))}
    </div>
  );
}
