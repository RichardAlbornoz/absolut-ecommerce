import { Card,Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import StockContador from '../ItemCount/itemCount';

const Item = ({producto}) =>{

    const [cantidad, setCantidad]= useState(1);
    const [flag, setFlag] = useState(true);

    function add() {
      if (cantidad > 10) { alert('No hay tantos productos disponibles'); }
      else {
        setCantidad(cantidad + 1);
      }
    }
    const remove = ()=>{
      if (cantidad>1){
        setCantidad (cantidad-1)
      } else {
        alert ('No puedes agregar menos de 1 producto al carrito!')
      }
    }

    const addToCart = () => {
      setFlag(false);
  }
    
    return(
        <Card key={producto.id} style={{ width: "18rem"}}>
            <Link to={`/item/${producto.category}`}>
                <Card.Img variant="top" src={producto.foto} style={{maxHeight: "200px"}}/>
            </Link>
            <Card.Body style={{height:"20rem", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-around"}}>
                <Card.Title>Producto:{producto.title}</Card.Title>
                <Card.Text>Precio: $ {producto.price}</Card.Text>
                {flag 
            ? (<StockContador value={cantidad} sumarProducto={add} quitarProducto ={remove} onAdd={addToCart}/>) 
            :( <Link to="/cart"><Button variant="primary" className="addToCart">Añadir al carrito</Button></Link>)}
            </Card.Body>
        </Card>
    );
};

export default Item;