// src/components/ItemListContainer.jsx
import React from 'react';

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
    </div>
  );
};

export default ItemListContainer;
