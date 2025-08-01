import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import productos from '../data/Productos';

const getProductoPorId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((p) => p.id === parseInt(id));
      resolve(producto);
    }, 1000);
  });
};

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductoPorId(id).then((res) => setProducto(res));
  }, [id]);

  return (
    <div className="container mt-5">
      {producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <p className="text-center">Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
