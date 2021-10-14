import './cartWidget.css';
import Cart from '../Img/cart.png';

const CartWidget= () => {
   return (
     <div className="cartWidget ">
       <img src={Cart} alt="" className="icon"></img>
       <sup className="cartWidget-number">0</sup>
     </div>
   )
 }
  
 export default CartWidget;