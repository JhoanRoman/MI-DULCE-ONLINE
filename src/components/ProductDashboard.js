import React from 'react';
import ProductCard from './ProductCard';
import './ProductDashboard.css';

function ProductDashboard({ products }) {
  return (
    <div className="product-dashboard">
      <h2>Panel de Productos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductDashboard;
