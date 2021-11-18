import './itemCount.css';
import { Button } from "react-bootstrap";


const StockContador = ({sumarProducto,value,quitarProducto}) => {
  const [counter, setCounter] = useState(inicial);


  const sumarProducto = (e) => {
    e.preventDefault();
    if (counter < stock) {
      setCounter(counter + 1)
    } else {
      alert('No hay más stock')
    }
  }

  const quitarProducto = (e) => {
    e.preventDefault();
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className="col-10 col-sm-9 col-lg-8 row justify-content-center align-content-center justify-self-center mx-0">
      <Button className='mx-1 my-0 fs-4 col-3 text-center' id='accionAgregar' onClick={quitarProducto}>-</Button>
      <p className="badge rounded-pill mx-1 col-2 text-center" id="lblCartCount">{value}</p>
      <Button className='mx-1 my-0 fs-4 col-3 text-center' id='accionRestar' onClick={sumarProducto} >+</Button>
    </div>
  )
}
  
  export default StockContador;