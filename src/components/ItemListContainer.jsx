import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BreadImage from '../assets/bread-image.png';
import ItemList from './ItemList'; 
import { useLocation } from 'react-router-dom';
import productos from '../data/Productos';
//Promesas
const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productos), 1000);
  });
};

const ItemListContainer = ({ greeting, texto }) => {
  const [items, setItems] = useState([]);
  const { categoriaId } = useParams();
  const location = useLocation();
const esHome = location.pathname === '/';

  useEffect(() => {
    getProductos().then(data => {
      if (categoriaId) {
        const filtrados = data.filter(item => item.categoria === categoriaId);
        setItems(filtrados);
      } else {
        // NOTA: Si no hay categoría en la URL, muestra todos, Podría mejor poner el Top10 pero ya no ya hay que entregar.
        setItems(data);
      }
    });
  }, [categoriaId]);
const nombresCategorias = {
  productos: "Productos",
  ofertas: "Ofertas",
  top10: "Top 10",
};
const textosCategorias = {
  productos: "Explora nuestros productos recién horneados",
  ofertas: "Aprovecha nuestras ofertas mágicas",
  top10: "Nuestros 10 panes favoritos según los clientes",
};
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="welcome-card text-center">
            <h1 className="display-4 mb-3">
              {categoriaId ? (nombresCategorias[categoriaId.toLowerCase()] || "Categoría") : "Bienvenid@s"}
            </h1>
            <p className="lead">
              {categoriaId ? (textosCategorias[categoriaId.toLowerCase()] || "Explora nuestros productos") : texto}
            </p>
          </div>
        </div>
      </div>
      {esHome &&(
                <div className="row justify-content-center mt-4">
          <div className="col-md-6 text-center">
            <img
              src={BreadImage}
              alt="Pancito humeante"
              className="img-fluid"
              style={{ maxHeight: '300px', objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
      <div className="row mt-5">
        <ItemList productos={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;


