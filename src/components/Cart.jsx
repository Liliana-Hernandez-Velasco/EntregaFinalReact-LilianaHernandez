import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);
  const productosAgrupados = cart.reduce((acc, producto) => {
    const existente = acc.find(p => p.id === producto.id);
    if (existente) {
      existente.cantidad += 1;
    } else {
      acc.push({ ...producto, cantidad: 1 });
    }
    return acc;
  }, []);

  const total = productosAgrupados.reduce(
    (suma, p) => suma + p.precio * p.cantidad,
    0
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4"> Tu carrito</h2>

      {productosAgrupados.length === 0 ? (
        <p>No has agregado productos aún.</p>
      ) : (
        <>
          {productosAgrupados.map((item) => (
            <div key={item.id} className="mb-3 p-3 border rounded bg-white shadow-sm">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.nombre}</h5>
                  <p className="mb-1">Cantidad: {item.cantidad}</p>
                  <p className="mb-1">Precio unitario: ${item.precio}</p>
                  <p className="mb-1"><strong>Subtotal: ${item.precio * item.cantidad}</strong></p>
                  <div className="btn-group mt-2" role="group">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => removeFromCart(item.id)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() =>
                        [...Array(item.cantidad)].forEach(() => removeFromCart(item.id))
                      }
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
            <button className="btn btn-danger mt-2" onClick={clearCart}>
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

