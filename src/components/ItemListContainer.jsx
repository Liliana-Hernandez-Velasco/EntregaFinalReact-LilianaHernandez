// src/components/ItemListContainer.jsx
import React from 'react';
import BreadImage from '../assets/bread-image.png';

const ItemListContainer = ({ greeting, texto }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="welcome-card text-center">
            <h1 className="display-4 mb-3">{greeting}</h1>
            <p className="lead">{texto}</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-6 text-center">
          <img
            src={BreadImage}
            alt="Pancito humeante"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;


