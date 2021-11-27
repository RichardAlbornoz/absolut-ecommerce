import ItemDetails from '../../components/ItemDetail/itemDetail';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { getFirestore } from "../../firebase/index";


function ItemDetailContainer() {
	const [productos, setProductos] = useState([]);
	const{ itemID } = useParams();


	useEffect(() => {
		const db = getFirestore();
		const theItem = doc(db, 'items', itemID);
		getDoc(theItem).then((snapshot) => {
			if (snapshot.exists()) {
				setProductos(snapshot.data());
			}
		});
	}, [itemID]);
	
	
		return (
			<div className="container d-flex justify-content-center align-items-center h-100">
			  <div className="row">
				{productos ? productos.map((productos) => (
				  <div className="col-md-4" key={productos.id}>
					<ItemDetails  producto ={productos} />
				  </div>
				))
				: "Cargando los productos disponibles..."}
			  </div>
			</div>
		  );
		}

export default ItemDetailContainer;