import './itemList.css'
import {useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import StockContador from '../ItemCount/itemCount';
import { NavLink } from "react-router-dom";


const ItemList = ({botella}) => {
  const { addToCart, showHideCart } = useContext(CartContext);

  const onAddHandle = (counter) => {
  if (counter > 0) {
    showHideCart(false)
    addToCart(botella, counter)
  }
  };
  
  const onIncreaseHandle = (counter) => {
    console.log('itemlist dice ' + counter)
  }

return ( 
<div className="row justify-content-center col-12 col-sm-6 mb-5">
<NavLink to={`/botella/ ${botella.id}`}><img className="card-img-top img-fluid" src={botella.imagen} alt="S" /></NavLink>
<div className="card-body col-11">
  <p className="card-text ">
    <b>{botella.tittle}</b>
  </p>
  <p className="card-text ">
    <b>${botella.price}</b>
  </p>
</div>

<div className="col-11 col-sm-9 col-md-7 dropdown mb-2 px-2 row justify-content-center">
  <button
    className="btn btn-secondary dropdown-toggle col-5"
    type="button"
    id="dropdownMenuButton1"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Botella
  </button>
  <ul
    className="dropdown-menu"
    aria-labelledby="dropdownMenuButton1"
  >
<li>
                  <a className="dropdown-item" href="/#">
                    <b>4</b> <span style={{ fontSize: `80%` }}>(ABSOLUT Raspberri)</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    <b>5</b> <span style={{ fontSize: `80%` }}>(ABSOLUT India)</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    <b>6</b> <span style={{ fontSize: `80%` }}>(ABSOLUT Mexico)</span>
                  </a>
                 </li>
                 <li> 
                  <a className="dropdown-item" href="/#">
                    <b>7</b> <span style={{ fontSize: `80%` }}>(ABSOLUT Elyx)</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    <b>8</b> <span style={{ fontSize: `80%` }}>(ABSOLUT Rainbow)</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    <b>9</b> <span style={{ fontSize: `80%` }}>(ABSOLUT Oak)</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    <b>10</b> <span style={{ fontSize: `80%` }}>(ABSOLUT Pack)</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    <b>11</b> <span style={{ fontSize: `80%` }}>(ABSOLUT Combo)</span>
                  </a>
                </li>
  </ul>
</div>
<StockContador inicial={0} stock={botella.stock} ID={botella.id} onAdd={onAddHandle} onIncrease={ onIncreaseHandle} texto='Agregar al carrito' />
</div>
)
  };

export default ItemList;