import './itemList.css'
import Item from '../Item/item';

const ItemList = ({ bottle}) => {

    return (
        <>
            <Item
                title={bottle.title}
                price={bottle.price}
                pictureUrl={bottle.imagen}
            />
        </>
    );
}

export default ItemList;