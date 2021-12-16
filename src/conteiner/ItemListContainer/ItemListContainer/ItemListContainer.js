import ItemList from '../../../components/ItemList/itemList';
import { useParams } from 'react-router';

function ItemListContainer({ gretting }) {
	const { categoryId } = useParams();
	return <ItemList titulo={gretting} category={categoryId} />;
}

export default ItemListContainer;