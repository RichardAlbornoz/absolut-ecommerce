import { useState } from 'react';
import { Link } from "react-router-dom";
import './itemDetail.css';
import StockContador from '../ItemCount/itemCount';


const ItemDetails = ({producto}) => {

    const [productos, setProductos]= useState(1)
    const [flag, setFlag] = useState(true);

    function add() {
      if (productos > 10) { alert('No hay tantos productos disponibles'); }
      else {
        setProductos(productos + 1);
      }
    }
    const remove = ()=>{
      if (productos>1){
        setProductos (productos-1)
      } else {
        alert ('No puedes agregar menos de 1 producto al carrito!')
      }
    }
    const addToCart = () => {
      setFlag(false);
  }
    
    return (
            <>
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={producto.imagen} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{producto.title}</h4>
        <p> {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(producto.price)}</p>
        {flag 
        ? (<StockContador value={productos} sumarProducto={add} quitarProducto ={remove}  onAdd={addToCart}/>)
        :( <Link to="/cart"><Button variant="primary" className="addToCart">Añadir al carrito</Button></Link>)}
      </div>
    </div>
 </>
        )
}

export default ItemDetails;