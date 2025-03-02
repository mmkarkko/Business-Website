import "./MenuItem.css";
import { Link, useLocation } from 'react-router-dom';

export default function MenuItem({ item, setIsMenuOpen }) {
  const location = useLocation();
  
  // Check, if the link is active
  const isActive = location.pathname === item.link;
  
  // Close menu, when a link is clicked
  const handleClick = () => {
    if (setIsMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  
  return (
    <div className="menuItem">
      <Link 
        to={item.link}
        className={isActive ? "menuItem active" : "menuItem"}
        onClick={handleClick}
      >
        {item.text}
      </Link>
    </div>
  );
}
