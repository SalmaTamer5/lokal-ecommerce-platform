// src/CartContext.jsx
import React, { createContext, useContext, useState } from 'react';
import REC from './assets/Rectangle (5).png'; // Adjusted path
import PIC1 from './assets/Rectangle (1).png'; // Adjusted path

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'RAYAM BEIGE FUR CLOGS', color: 'Beige', size: '38', price: 705, quantity: 1, src: PIC1, alt: 'pic1' },
    { id: 2, name: 'AELIN AMBER DRESS', color: 'Red', size: 'M', price: 1600, quantity: 1, src: REC , alt: 'pic5' },
  ]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id && cartItem.color === item.color && cartItem.size === item.size
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id && cartItem.color === item.color && cartItem.size === item.size
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevItems, item];
    });
  };

  const increaseQuantity = (id, color, size) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.color === color && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id, color, size) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.color === color && item.size === size && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id, color, size) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.id === id && item.color === color && item.size === size))
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);