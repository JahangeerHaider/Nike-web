

import React, {createContext,useContext,useState} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, img: '/images/shoe1.jfif', title: 'Air Jordan 4', price: 180 },
    { id: 2, img: '/images/shoe2.jfif', title: 'Dunk Low Orewood', price: 150 }]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (title) => {
    setCartItems((prevItems) => prevItems.filter(item => item.title !== title));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
