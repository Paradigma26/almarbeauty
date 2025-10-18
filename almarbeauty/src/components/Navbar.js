import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/logo.jpeg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* --- Barra superior --- */}
      <nav className="nb-navbar">
        <div className="nb-logo-section">
          <img src={logo} alt="AlmarBeauty logo" className="nb-logo-img" />
          <span className="nb-logo-text">AlmarBeauty</span>
        </div>

        <button
          className={`nb-hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <svg
            className="nb-ham-icon"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <rect className="r1" x="3" y="6" width="18" height="2" rx="1" />
            <rect className="r2" x="3" y="11" width="18" height="2" rx="1" />
            <rect className="r3" x="3" y="16" width="18" height="2" rx="1" />
          </svg>
        </button>
      </nav>

      {/* --- Menú lateral --- */}
      <div className={`nb-side ${isOpen ? "open" : ""}`}>
        <ul className="nb-list">
          <li><a href="#inicio" onClick={toggleMenu}>Inicio</a></li>
          <li><a href="#productos" onClick={toggleMenu}>Productos</a></li>
          <li><a href="#contacto" onClick={toggleMenu}>Contacto</a></li>
        </ul>
      </div>

      {/* --- Fondo oscuro (overlay) --- */}
      <div
        className={`nb-overlay ${isOpen ? "visible" : ""}`}
        onClick={toggleMenu}
      ></div>
    </>
  );
}

export default Navbar;
