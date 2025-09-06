import React, { useState, useContext } from 'react';
import { CartContext } from '../components/CartContext';
import ItemCount from "../components/ItemCount";
import Swal from 'sweetalert2';

const ItemDetail = ({ producto }) => {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false); 

  const handleAddToCart = (cantidad) => {
    addToCart({ ...producto, quantity: cantidad });
    setAdded(true);
     // Oculta el ItemCount después de agregar y muestra el mensaje que vimos en clase.
    Swal.fire({
      position:'top-end',
      icon:'success',
      title:`Agregaste ${producto.nombre} al carrito`,
      showCancelButton:false,
      showConfirmButton:false,
      timer:1000
    })
  };

  return (
    <div className="card mx-auto shadow" style={{ maxWidth: '600px' }}>
      <div className="card-body text-center">
        <h2>{producto.nombre}</h2>
        <p>Categoría: {producto.categoria}</p>
        <p>Precio: ${producto.precio}</p>
        <p>{producto.descripcion}</p>

        {!added ? (
          <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
        ) : (
          <p className="text-success mt-3 fw-bold">
            ¡Producto agregado al carrito! 🧺
          </p>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
