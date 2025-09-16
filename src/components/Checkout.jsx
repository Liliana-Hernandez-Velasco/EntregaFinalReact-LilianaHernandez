import React, { useContext, useState } from 'react';
import { CartContext } from '../components/CartContext';
import { collection, addDoc, getFirestore, Timestamp } from 'firebase/firestore';
import OrderSuccess from './OrderSuccess';

const Checkout = () => {
  const { cart, getTotalQuantity, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const db = getFirestore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer: {
        name: form.name,
        email: form.email,
        phone: form.phone,
      },
      items: cart,
      total: cart.reduce((acc, item) => acc + item.precio * item.quantity, 0),
      date: Timestamp.fromDate(new Date())
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
    <div className="container mt-5">
      {orderId ? (
        <OrderSuccess orderId={orderId} />
      ) : (
        <>
          <h2 className="text-center mb-4">Confirmar compra</h2>
          <p className="text-center">Hay {getTotalQuantity()} productos en el carrito.</p>

          <form onSubmit={handleSubmit} className="p-4 border rounded bg-light mx-auto" style={{ maxWidth: '500px' }}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Teléfono</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <button className="btn btn-primary w-100" type="submit">
              Finalizar compra
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;