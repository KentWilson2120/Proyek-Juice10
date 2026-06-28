import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="main-navigation">
      <div className="nav-container">

        <div className="menu-icon" onClick={() => setOpen(!open)}>
          ☰
        </div>

        <ul className={`nav-menu ${open ? "active" : ""}`}>
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/product">PRODUCT</NavLink></li>
          <li><NavLink to="/about">ABOUT</NavLink></li>
          <li><NavLink to="/order">ORDER</NavLink></li>
        </ul>

      </div>
    </nav>
  );
}