import React from 'react';
import './ShoppingCart.css';

function ShoppingCart({ cartItems }) {
  return (
    <div className="shopping-cart">
      <h2>Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.productName} - {item.price} COP
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingCart;
