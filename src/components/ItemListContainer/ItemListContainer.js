import './ItemListContainer.css';

const ListContainer =(props)=> {
    return(
        <div className="listaProductos">
            <div>{props.text}</div>
            {props.children}
        </div>
    )
}
export default ListContainer
