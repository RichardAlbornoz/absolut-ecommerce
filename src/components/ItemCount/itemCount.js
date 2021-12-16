import './itemCount.css';
import { useState } from 'react';

const StockContador = ({value}) => {
  
  const [counter, setCounter] = useState(1);

  const sumarProducto = (e) => {
    e.preventDefault();
    if (counter < 11) {
      setCounter(counter + 1)
    } else {
      alert('No hay más stock')
    }
  }

  const quitarProducto = (e) => {
    e.preventDefault();
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className="col-10 col-sm-9 col-lg-8 row justify-content-center align-content-center justify-self-center mx-0">
      <button className='mx-1 my-0 fs-4 col-3 text-center' id='accionAgregar' onClick={quitarProducto}>-</button>
      <p className="badge rounded-pill mx-1 col-2 text-center" id="lblCartCount">{value}</p>
      <button className='mx-1 my-0 fs-4 col-3 text-center' id='accionRestar' onClick={sumarProducto} >+</button>
    </div>
  )
}
  
  export default StockContador;