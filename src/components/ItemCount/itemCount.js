import './itemCount.css';

const StockContador= ({sumarProducto,value,quitarProducto}) => {
    return (
      <div className="containerCount">
          <p className="pCount">{value}</p>
          <button onClick ={sumarProducto} className="btnCount">+</button>
          <button onClick ={quitarProducto} className="btnCount">-</button>          
      </div>
    );
  }  
  export default StockContador;