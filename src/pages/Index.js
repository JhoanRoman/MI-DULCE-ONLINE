import React from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import './Index.css';

function Index() {
  return (
    <main className="index-page">
      <h2>Productos Destacados</h2>
      <div className="product-list">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default Index;
