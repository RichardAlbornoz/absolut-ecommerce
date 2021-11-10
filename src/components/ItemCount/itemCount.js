import './itemCount.css';
import { Button } from "react-bootstrap";

const StockContador= ({sumarProducto,value,quitarProducto}) => {
    return (
      <div className="containerCount">
          <p className="pCount">{value}</p>
          <button onClick ={sumarProducto} className="btnCount">+</button>
          <button onClick ={quitarProducto} className="btnCount">-</button>     
          <Button variant="primary" onClick={onAdd}>Añadir al carrito</Button>     
      </div>
    );
  }   
  export default StockContador;