import { useState } from 'react';
import './itemDetail.css';
import StockContador from '../ItemCount/itemCount';


const ItemDetails = ({title, price, imagen}) => {

    const [productos, setProductos]= useState(1)
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
    
    return (
            <>
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imagen} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p> {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price)}</p>
        <StockContador value={productos} sumarProducto={add} quitarProducto ={remove}/>
        <div className="addToCart">Añadir al carrito</div>
      </div>
    </div>
 </>
        )
}

export default ItemDetails;