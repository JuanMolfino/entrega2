import {Link,Outlet} from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "./CartContext";
import "./navbar.css"
function Layout() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);
  
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li>
            <Link to="/carrito" className="cart-link">
               Carrito
              {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </Link>
          </li>
        </ul>
      </nav>
       <Outlet/>
    </>
  )
}

export default Layout
