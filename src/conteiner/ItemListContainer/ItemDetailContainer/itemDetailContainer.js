import ItemDetails from '../../../components/ItemDetail/itemDetail';
import DatosProductos from '../../../components/Datos/datos.json';
import { useEffect, useState } from 'react';

function ItemDetailContainer() {
	const [productos, setProductos] = useState(null);
	
    const getItem = (data) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (data) {
					resolve(data);
				} else {
					reject('No se encontró nada');
				}
			}, 3000);
		});

	useEffect(() => {
		getItem(DatosProductos)
			.then((res) => setProductos(res))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="container d-flex justify-content-center align-items-center h-100">
		  <div className="row">
			{productos ? productos.map((producto) => (
			  <div className="col-md-4" key={producto.id}>
				<ItemDetails imagen={producto.foto} title={producto.title} price={producto.price} />
			  </div>
			))
			: "Cargando los productos disponibles..."}
		  </div>
		</div>
	  );
	}

export default ItemDetailContainer;