import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import { Link } from 'react-router-dom'; // ⬅️ Importa Link para redirección

const Cart = () => {
  const { cart, addToCart, removeFromCart, removeAllFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((suma, p) => suma + p.precio * p.quantity, 0);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Tu carrito</h2>

      {cart.length === 0 ? (
        <p>No has agregado productos aún.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="mb-3 p-3 border rounded bg-white shadow-sm">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.nombre}</h5>
                  <p className="mb-1">Cantidad: {item.quantity}</p>
                  <p className="mb-1">Precio unitario: ${item.precio}</p>
                  <p className="mb-1"><strong>Subtotal: ${item.precio * item.quantity}</strong></p>

                  <div className="btn-group mt-2" role="group">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => removeFromCart(item.id)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => addToCart({ ...item, quantity: 1 })}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => removeAllFromCart(item.id)}
                    >
                      Eliminar todo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-4 p-3 border-top text-end">
            <h4>Total: ${total}</h4>

            <div className="d-flex justify-content-end gap-3 mt-3">
              <button className="btn btn-danger" onClick={clearCart}>
                Vaciar carrito
              </button>

              <Link to="/checkout" className="btn btn-success">
                Finalizar compra
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
