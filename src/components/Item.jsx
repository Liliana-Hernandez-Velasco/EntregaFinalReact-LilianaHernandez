// src/components/Item.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  return (
    <div className="card text-center shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">Precio: ${producto.precio}</p>
        <Link to={`/detalle/${producto.id}`} className="btn btn-outline-primary">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
