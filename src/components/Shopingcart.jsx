import React, { useState } from 'react';

const initialCart = [
  { id: 1, name: 'Nike Air Max', price: 120, quantity: 1 },
  { id: 2, name: 'Nike Revolution', price: 90, quantity: 2 }
];

function ShoppingCart() {
  const [cartItems, setCartItems] = useState(initialCart);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, delta) => {
    setCartItems(cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <span>{item.name}</span>
                <div className="cart-controls">
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
                <span>${item.price * item.quantity}</span>
                <button className="remove-btn" onClick={() => handleRemove(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3 className="cart-total">Total: ${total}</h3>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;
