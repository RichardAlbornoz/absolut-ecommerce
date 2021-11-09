import './ItemListContainer.css';

const ListContainer= (props) => {
     return (
      <div>
          <div className ="hproductos listaProductos">{props.greeting}</div>
      </div>
    );
  }  
  export default ListContainer;
