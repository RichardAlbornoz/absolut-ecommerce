import { useState } from 'react';
import StockContador from '../ItemCount/ItemCount';

const Item = ({id, title, price, imagen}) => {

    const [productos, setProductos]= useState (1)

    const add = () => {
      if (productos>10) {alert ('No hay tantos productos disponibles')}
    else {
      setProductos (productos+1)
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
            <div className="cardComponent">
                <div className="imgCard">
                    <img src={imagen} alt="" />
                </div>
                <h3>{title}</h3>
                <p> {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price)}</p>
                <StockContador value={productos} sumarProducto={add} quitarProducto ={remove}/>
                <div className="addToCart">Añadir al carrito</div>
            </div>
        </>
        )
}

export default Item;