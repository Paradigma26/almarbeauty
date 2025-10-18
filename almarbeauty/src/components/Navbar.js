import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../images/logo.jpeg"; 

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* === NAVBAR === */}
      <nav className="nb-navbar">
        <div className="nb-logo-section">
          <img src={logo} alt="Logo" className="nb-logo-img" />
          <span className="nb-logo-text">Almar Beauty</span>
        </div>

        <button
          className={`nb-hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <svg
            className="nb-ham-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <rect className="r1" y="4" width="24" height="2" rx="1"></rect>
            <rect className="r2" y="11" width="24" height="2" rx="1"></rect>
            <rect className="r3" y="18" width="24" height="2" rx="1"></rect>
          </svg>
        </button>
      </nav>

      {/* === OVERLAY (oscurece fondo) === */}
      <div
        className={`nb-overlay ${menuOpen ? "visible" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* === MENÚ LATERAL === */}
      <div className={`nb-side ${menuOpen ? "open" : ""}`}>
        <ul className="nb-list">
          <li>
            <Link
              to="inicio"
              smooth={true}
              duration={600}
              offset={-70}
              className="nav-link"
              activeClass="active"
              spy={true}
              onClick={closeMenu}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="productos"
              smooth={true}
              duration={600}
              offset={-70}
              className="nav-link"
              activeClass="active"
              spy={true}
              onClick={closeMenu}
            >
              Productos
            </Link>
          </li>
          <li>
            <Link
              to="contacto"
              smooth={true}
              duration={600}
              offset={-70}
              className="nav-link"
              activeClass="active"
              spy={true}
              onClick={closeMenu}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
