import React, { useState } from 'react';
import ShoppingCart from '../components/ShoppingCart';
import './ShoppingCartPage.css';

function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState([]);

  // Aquí podrías agregar lógica para manejar el carrito

  return (
    <div className="shopping-cart-page">
      <ShoppingCart cartItems={cartItems} />
    </div>
  );
}

export default ShoppingCartPage;
