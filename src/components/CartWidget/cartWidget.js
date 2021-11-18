import './cartWidget.css';
import React from 'react';
import CartContext from "../../context/cart/CartContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";


const CartWidget= () => {
  const { cartItems, showCart } = useContext(CartContext);

  const totalItems = cartItems.reduce(function (a, b) { return a + b.quantity; }, 0);
  return (
 
  <NavLink className='px-1 cart__icon row' href="carrito_tabla.html" id='btnCarritoNav' to='/cart'>
  <i className="fas fa-shopping-cart">
      {showCart && totalItems >0 ?(<span className="badge rounded-pill animate__animated animate__zoomIn" id="lblCartCount">{totalItems}</span>): null}
  </i>
</NavLink>
  )
}
export default CartWidget;