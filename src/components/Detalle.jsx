import { useParams } from "react-router-dom";
import { doc, getDoc,getFirestore } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";

function Detalle() {
  const db = getFirestore();
  const { id } = useParams(); 
  const [data, setData] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const itemRef = doc(db, "items", id);
        const snapshot = await getDoc(itemRef);
        if (snapshot.exists()) {
          setData({ ...snapshot.data(), id: snapshot.id });
        } else {
          setData(null); 
        }
      } catch (error) {
        console.error("Error fetching product: ", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!data) {
    return <h1>El producto seleccionado no existe</h1>;
  }

  return (
    <div>
      <h2>Detalles del producto</h2>
      <h2>{data.nombre}</h2>
      <img src={data.imagen || ""} alt={data.nombre} className="detalle-img" />
      <p>{data.descripcion || "No hay descripción disponible"}</p>
      <h3>${data.precio}</h3>
      <button className="btn" onClick={() => addToCart(data)}>Agregar al carrito</button>
    </div>
  );
}

export default Detalle;