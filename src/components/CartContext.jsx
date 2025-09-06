import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (newItem) => {
    const existingItem = cart.find(item => item.id === newItem.id);

    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.id === newItem.id
          ? { ...item, quantity: item.quantity + newItem.quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...newItem, quantity: newItem.quantity || 1 }]);
    }
  };

  const removeFromCart = (id) => {
  const updatedCart = cart
    .map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity - 1;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    })
    .filter(item => item !== null);

  setCart(updatedCart);
};

  const removeAllFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };
  const getTotalQuantity = () => {
  return cart.reduce((total, item) => total + item.quantity, 0);
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        clearCart,
        getTotalQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

