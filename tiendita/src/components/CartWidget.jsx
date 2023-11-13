import React from 'react';

const CartWidget = ({ cantidadItems }) => {
  return (
    <div className="widget-carrito">
      <h2>Carrito de compras</h2>
      <i className="fas fa-shopping-cart"></i>
      <span>{cantidadItems}</span>
    </div>
  );
}

export default CartWidget;