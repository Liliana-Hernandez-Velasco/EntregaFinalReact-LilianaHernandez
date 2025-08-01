import { useContext } from 'react';
import { CartContext } from '../components/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <h2>Tu carrito</h2>
      {cart.length === 0 ? (
        <p>No has agregado productos aún.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="mb-3">
            <h5>{item.nombre}</h5>
            <p>Precio: ${item.precio}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
