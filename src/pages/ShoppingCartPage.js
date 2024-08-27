import React from 'react';
import ShoppingCart from '../components/ShoppingCart';
import './ShoppingCartPage.css';

function ShoppingCartPage({ cartItems }) {
  return (
    <div className="shopping-cart-page">
      <ShoppingCart cartItems={cartItems} />
    </div>
  );
}

export default ShoppingCartPage;
