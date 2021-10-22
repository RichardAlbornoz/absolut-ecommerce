import './ItemListContainer.css';

const ListContainer =(props)=> {
    return(
        <div className="listaProductos">
            <div>{props.greeting}</div>
        </div>
    )
}
export default ListContainer
