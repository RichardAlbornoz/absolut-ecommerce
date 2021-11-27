import './ItemListContainer.css';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/itemList";
import { collection, getDocs, query} from "firebase/firestore";
import { getFirestore } from "../../firebase/index";


const ListContainer= (props) => {  

    const [grilla, setGrilla] = useState([]);
    const{ categoryID } = useParams();


	useEffect(() => {
		const db = getFirestore();
		async function getItems(db) {
			const itemsCol = categoryID
				? query(
						collection(db, 'items'),
				  )
				: collection(db, 'items');
			const snapshot = await getDocs(itemsCol);
      const itemsList = snapshot.docs.map((doc) => doc.data())
       tipoHOME ? setGrilla(itemsList.filter((producto) => producto.tipo === tipoHOME)) : setGrilla(itemsList) ||
        tipoID ? setGrilla(itemsList.filter((producto) => producto.tipo === tipoID)) : setGrilla(itemsList)
		}
		getItems(db);
  }, [tipoID, tipoHOME]);
	
  return (
    <div>
        <div className ="hproductos listaProductos">{props.greeting}</div>
        <div className="itemList">
               <ItemList productos={grilla}/>  
          </div>
    </div>
  );
}  
export default ListContainer;