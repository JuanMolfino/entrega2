import { Link } from "react-router-dom"
function Producto({nombre, id, precio, imagen, }) {
  
 
  return (
      <div className="product-card">
      <img src={imagen} alt={nombre}/>
      <h3>{nombre}</h3>
      <p><strong>${precio}</strong></p>
      <Link to={`/productos/${id}`} className="btn">Ver detalles</Link>
    </div>
    
  )
}

export default Producto
