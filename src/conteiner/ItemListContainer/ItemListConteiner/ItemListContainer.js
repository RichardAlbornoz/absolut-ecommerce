import './ItemListContainer.css';
import ItemList from '../../components/ItemList/itemList';

const ListContainer= (props) => {
     return (
      <div>
          <div className ="hproductos listaProductos">{props.greeting}</div>
          <div className="cursosContainer">
                 <ItemList />
          </div>
      </div>
    );
  }  
  export default ListContainer;
