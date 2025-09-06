import { useEffect } from "react";
import { db } from "../service/firebase"; 
import { collection, addDoc } from "firebase/firestore";
import productos from "../data/Productos"; 

const UploadProductos = () => {
  useEffect(() => {
    const upload = async () => {
      const colRef = collection(db, "productos");

      for (let producto of productos) {
        try {
          await addDoc(colRef, producto);
          console.log(`✅ Subido: ${producto.nombre}`);
        } catch (error) {
          console.error(`❌ Error al subir ${producto.nombre}:`, error);
        }
      }

      alert("🎉 Productos subidos exitosamente a Firebase.");
    };

    upload();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Subiendo productos...</h2>
      <p>Este proceso puede tardar unos segundos.</p>
    </div>
  );
};

export default UploadProductos;