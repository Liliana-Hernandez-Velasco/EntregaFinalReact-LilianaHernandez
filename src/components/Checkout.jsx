import React, { useContext, useState } from 'react';
import { CartContext } from '../components/CartContext';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import OrderSuccess from './OrderSuccess';

const Checkout = () => {
  const { cart, getTotalQuantity, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const db = getFirestore();

  const handleCheckout = async () => {
    const order = {
      buyer: {
        name: 'Cliente Fantasía',
        email: 'cliente@fantasybakery.com',
        phone: '1234567890',
      },
      items: cart,
      total: cart.reduce((acc, item) => acc + item.precio * item.quantity, 0),
      date: new Date()
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al generar la orden: ", error);
    }
  };

  return (
    <div className="container mt-5 text-center">
      {orderId ? (
        <OrderSuccess orderId={orderId} />
      ) : (
        <>
          <h2>Confirmar compra</h2>
          <p>Hay {getTotalQuantity()} productos en el carrito.</p>
          <button className="btn btn-primary mt-3" onClick={handleCheckout}>
            Finalizar compra
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
