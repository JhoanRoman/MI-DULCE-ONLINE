import React from 'react';
import './ShoppingCart.css';

function ShoppingCart({ cartItems }) {
  // Agrupamos los productos por ID y contamos las ocurrencias
  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  return (
    <div className="shopping-cart">
      <h2>Tu Carrito</h2>
      {groupedItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div className="cart-items">
          {groupedItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.productImage} alt={item.productName} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.productName}</h3>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: x{item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
