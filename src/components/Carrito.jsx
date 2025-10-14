import { useContext } from "react";
import { CartContext } from "./CartContext";
import Swal from "sweetalert2";
import "./product.css";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const handlePurchase = () => {
    if (cart.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: '¡Carrito Vacío!',
        text: 'Agrega algunos productos deliciosos antes de proceder con la compra.',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#F59E0B',
        background: '#fff',
        customClass: {
          popup: 'swal-popup'
        }
      });
      return;
    }

    // este muestra el confirmar
    Swal.fire({
      title: '¿Confirmar Compra?',
      text: `Total: $${total.toFixed(2)}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#10B981',
      cancelButtonColor: '#EF4444',
      confirmButtonText: '¡Sí, Comprar!',
      cancelButtonText: 'Cancelar',
      background: '#fff',
      customClass: {
        popup: 'swal-popup'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // este muestra el exito
        Swal.fire({
          icon: 'success',
          title: '¡Compra Exitosa!',
          text: '¡Gracias por tu compra! Tus productos llegarán pronto.',
          confirmButtonText: '¡Genial!',
          confirmButtonColor: '#10B981',
          background: '#fff',
          customClass: {
            popup: 'swal-popup'
          }
        });
        
      
        clearCart();
      }
    });
  };

  return (
    <div className="cart-container">
      <h2> Carrito de Compras</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>El carrito está vacío</p>
          <p>¡Agrega algunos productos deliciosos!</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.imagen} alt={item.nombre} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.nombre}</h3>
                  <p>Cantidad: {item.cantidad}</p>
                  <p>Precio unitario: ${item.precio}</p>
                  <p className="item-total">Subtotal: ${item.precio * item.cantidad}</p>
                </div>
                <button 
                  className="remove-btn" 
                  onClick={() => removeFromCart(item.id)}
                >
                   Quitar
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${total.toFixed(2)}</h3>
            <div className="cart-actions">
              <button className="purchase-btn" onClick={handlePurchase}>
                Procesar Compra
              </button>
              <button className="clear-btn" onClick={clearCart}>
                Vaciar carrito
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
