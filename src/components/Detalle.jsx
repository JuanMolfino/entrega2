import { useParams } from 'react-router-dom';
import productosjs from '../productos.js';

function Detalle() {
  const { id } = useParams(); // Desestructuramos id del objeto
  const producto = productosjs.find(prod => prod.id === parseInt(id));

  if (!producto) {
    return <h1>El producto seleccionado no existe</h1>;
  }

  return (
    <div>
      <h2>Detalles del producto</h2>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <h3>${producto.precio}</h3>
    </div>
  );
}

export default Detalle;