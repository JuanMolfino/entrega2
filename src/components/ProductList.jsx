import { collection, getDocs,getFirestore} from "firebase/firestore";
import { useEffect, useState } from "react";
import Producto from "./Producto";
import "./product.css";  

function ProductList() {
  const db = getFirestore();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "items"));
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          nombre: doc.data().nombre,
          precio: doc.data().precio,
          imagen: doc.data().imagen || "", 
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <Producto
          key={product.id}
          id={product.id}
          nombre={product.nombre}
          precio={product.precio}
          imagen={product.imagen}
        />
      ))}
    </div>
  );
}

export default ProductList;