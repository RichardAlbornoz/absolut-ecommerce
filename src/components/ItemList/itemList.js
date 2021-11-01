import './itemList.css'
import Item from '../Item/item';

const ItemList = ({bottle}) => {

    return (
        <>
            <Item
                title={bottle.title}
                price={bottle.price}
                imagen={bottle.imagen}
            />
        </>
    );
}

export default ItemList;