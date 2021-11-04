import './itemList.css'
import ItemDetails from '../ItemDetail/itemDetail';
import DatosProductos from '../Datos/datos.json'
import { useEffect, useState } from "react";


const ItemList = () => {
const [botellas, setBotellas] = useState([]);

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
    getPrograma(DatosProductos)
        .then((res) => setBotellas(res))
        .catch((err) => console.log(err));
}, []);


    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="row">
            {botellas ? botellas.map((botella) => (
              <div className="col-md-4" key={botella.id}>
                <ItemDetails foto={botella.imagen} title={botella.title} price={botella.price} />
              </div>
            ))
            : "Cargando los productos disponibles..."}
          </div>
        </div>
      );
    }

export default ItemList;