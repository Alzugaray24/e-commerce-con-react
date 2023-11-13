import React from 'react';
import CartWidget from "./CartWidget";
import '../css/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Logo de la Tienda</div>

      <ul className="nav-list">
        <li className="nav-item">
          <a href="/" className="nav-link">Inicio</a>
        </li>
        <li className="nav-item">
          <a href="/productos" className="nav-link">Productos</a>
        </li>
        <li className="nav-item">
          <a href="/contacto" className="nav-link">Contacto</a>
        </li>
      </ul>

      <div className="carrito">
        <CartWidget cantidadItems={3} />
      </div>
    </nav>
  );
}

export default Navbar;
