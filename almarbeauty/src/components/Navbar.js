import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">AlmarBeauty</h1>
      <ul className="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
