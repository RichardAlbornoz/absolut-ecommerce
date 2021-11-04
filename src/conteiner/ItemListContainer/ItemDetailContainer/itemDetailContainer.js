import ItemDetails from '../ItemDetail/itemDetail';
import DatosProductos from '../Datos/datos.json';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function ItemDetailContainer() {
	const [itemDetail, setItemDetail] = useState(null);
	const { itemId } = useParams();

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
			.then((res) => {
				setItemDetail(res.find((details) => details.id === itemId));
				console.log(ItemDetails);
			})

			.catch((err) => console.log(err));
	}, [itemId]);

	return (
		<div className='itemDetailContainer'>
			{itemDetail ? (
				<ItemDetails
					key={itemDetail.id}
					imagen={itemDetail.imagen}
					title={itemDetail.title}
					price={itemDetail.price}
				/>
			) : "Cargando los productos" (
			)}
		</div>
	);
}

export default ItemDetailContainer;