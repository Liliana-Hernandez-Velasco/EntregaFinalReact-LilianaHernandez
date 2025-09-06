import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BreadImage from '../assets/bread-image.png';
import ItemList from './ItemList'; 
import { useLocation } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../service/firebase";
//Promesas
const getProductosFromFirestore = async () => {
  const productosRef = collection(db, "productos");
  const snapshot = await getDocs(productosRef);
  const productos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return productos;
};

const ItemListContainer = ({ greeting, texto }) => {
  const [items, setItems] = useState([]);
  const { categoriaId } = useParams();
  const location = useLocation();
const esHome = location.pathname === '/';

useEffect(() => {
  getProductosFromFirestore()
    .then(data => {
      if (categoriaId) {
        const filtrados = data.filter(
          item => item.categoria.toLowerCase() === categoriaId.toLowerCase()
        );
        setItems(filtrados);
      } else {
        setItems(data);
      }
    })
    .catch(error => {
      console.error("Error al obtener productos:", error);
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


