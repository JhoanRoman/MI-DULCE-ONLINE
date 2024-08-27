import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.productImage} alt={product.productName} className="product-image" />
      <h3>{product.productName}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Comprar</button>
    </div>
  );
};

export default ProductCard;
