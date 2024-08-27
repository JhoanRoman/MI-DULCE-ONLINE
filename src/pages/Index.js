import React from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import './Index.css';

function IndexPage({ addToCart }) {
  return (
    <main className="index-page">
      <section className="intro">
        <h2>Bienvenido a MiDulceOnline</h2>
        <p>Tu tienda en línea de dulces y golosinas favoritas. Encuentra los mejores productos para alegrar tu día.</p>
      </section>

      <section className="featured-products">
        <h2>Productos Destacados</h2>
        <div className="product-list">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </section>

      <section className="about">
        <h2>Sobre Nosotros</h2>
        <p>En MiDulceOnline, nos apasiona ofrecer los mejores dulces y golosinas del mercado. Nuestro objetivo es brindar una experiencia de compra inigualable con productos de alta calidad y un excelente servicio al cliente.</p>
      </section>

      <section className="contact">
        <h2>Contacto</h2>
        <p>¿Tienes alguna pregunta o comentario? No dudes en contactarnos. Estamos aquí para ayudarte.</p>
        <p>Email: contacto@midulceonline.com</p>
        <p>Teléfono: +123 456 7890</p>
      </section>

      <section className="reviews">
        <h2>Opiniones</h2>
        <p>Lee lo que nuestros clientes dicen sobre nosotros:</p>
        <blockquote>
          <p>"¡Me encantan los productos de MiDulceOnline! Siempre llegan a tiempo y son de excelente calidad." - Ana M.</p>
        </blockquote>
        <blockquote>
          <p>"Un servicio al cliente excepcional y una gran variedad de dulces. ¡Recomiendo esta tienda a todos mis amigos!" - Luis R.</p>
        </blockquote>
      </section>
    </main>
  );
}

export default IndexPage;
