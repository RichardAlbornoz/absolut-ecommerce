import './itemList.css'
import Item from '../item/item'

const ItemList = ({botellas}) => {

    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="row">
        {botellas.length
          ? botellas.map((producto) => <Item botellas={producto} key={producto.id}/>)
          : "Cargando productos..."}
    </div>
    </div>
    );
};


export default ItemList;