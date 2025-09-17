import { useState } from "react";
import productosjs  from "../productos"; 
import Producto from "./Producto"; 

function Productos() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  // Obtener todas las categorías únicas
  const categorias = ["Todos", ...new Set(productosjs.map(p => p.categoria))];

  // Filtrar productos según categoría seleccionada
  const productosFiltrados =
    categoriaSeleccionada === "Todos"
      ? productosjs
      : productosjs.filter(p => p.categoria === categoriaSeleccionada);

  // Ordenar por precio ascendente
  productosFiltrados.sort((a, b) => parseInt(a.precio) - parseInt(b.precio));

  return (
    <div>
      
      <div style={{ marginBottom: "20px" }}>
        {categorias.map(cat => (
          <button
            key={cat}
            onClick={() => setCategoriaSeleccionada(cat)}
            style={{
              marginRight: "10px",
              padding: "8px 16px",
              borderRadius: "8px",
              border: categoriaSeleccionada === cat ? "2px solid #ff6600" : "1px solid #ccc",
              backgroundColor: categoriaSeleccionada === cat ? "#fff3e0" : "#fff",
              color: categoriaSeleccionada === cat ? "#ff6600" : "#333",
              cursor: "pointer"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Productos filtrados */}
      <div id="container" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {productosFiltrados.map(prod => (
          <Producto key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
}

export default Productos;