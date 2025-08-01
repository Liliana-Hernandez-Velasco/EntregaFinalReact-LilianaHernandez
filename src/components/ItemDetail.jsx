import React from 'react';
import {useContext} from 'react';
import {CartContext} from '../components/CartContext';

const ItemDetail = ({ producto }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card mx-auto shadow" style={{ maxWidth: '600px' }}>
      <div className="card-body text-center">
        <h2>{producto.nombre}</h2>
        <p>Categoría: {producto.categoria}</p>
        <p>Precio: ${producto.precio}</p>
        <p>{producto.descripcion}</p>
        <button className="btn btn-success" onClick={() => addToCart(producto)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;