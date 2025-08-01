import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (producto) => {
    setCart([...cart, producto]);
  };

  const removeFromCart = (id) => {
    const index = cart.findIndex(item => item.id === id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };
  const removeAllFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, removeAllFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
