import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../service/firebase';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const productosRef = collection(db, 'productos');
        const q = query(productosRef, where('id', '==', parseInt(id)));

        const querySnapshot = await getDocs(q);
        const docSnap = querySnapshot.docs[0];

        if (docSnap && docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log(`No se encontró el producto con id: ${id}`);
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProducto();
  }, [id]);

  return (
    <div className="container mt-5">
      {!producto ? (
        <p className="text-center">Cargando producto...</p>
      ) : producto.stock === 0 ? (
        <p className="text-center text-danger">Producto sin stock 🫤</p>
      ) : (
        <ItemDetail producto={producto} />
      )}
    </div>
  );
};

export default ItemDetailContainer;



