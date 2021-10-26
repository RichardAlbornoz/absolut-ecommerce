import './ItemListContainer.css';
import ItemList from '../ItemList/itemList';
import { useEffect, useState } from "react";
import Datos from "../../Datos.json";

const ListContainer= (props) => {
  
    const [productos, setProductos] = useState([]);
  
      const getPrograma = (programa) =>
          new Promise((resolve, reject) => {
              setTimeout(() => {
                  if (programa) {
                      resolve(programa);
                  } else {
                      reject("No hay nada para mostrar");
                  }
              }, 3000);
          });
  
      useEffect(() => {
          getPrograma(Datos)
              .then((res) => setProductos(res))
              .catch((err) => console.log(err));
      }, []);
  
  
    return (
      <div>
          <div className ="hproductos listaProductos">{props.greeting}</div>
          <div className="cursosContainer">
                  {productos ? productos.map((producto) => (
                          <ItemList bottle={producto} key={producto.id} />
                      ))
                      : "Cargando los productos disponibles..."}
              </div>
      </div>
    );
  }  
  export default ListContainer;
