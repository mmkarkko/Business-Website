import "./MenuItem.css";
import { NavLink } from 'react-router-dom';

export default function MenuItem({ item }) {
  return (
    <div className="menuItem">
      <NavLink to={item.link} className={({ isActive }) => 
        isActive ? "menu-item active" : "menu-item"}>{item.text}</NavLink>
    </div>
  );
}