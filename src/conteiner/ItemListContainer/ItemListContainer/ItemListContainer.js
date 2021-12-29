import ItemList from '../../../components/ItemList/itemList';
import { useParams } from 'react-router';

function ItemListContainer({ gretting, botella }) {
	const { categoryId } = useParams();
	return <ItemList botella={botella} titulo={gretting} category={categoryId} />;
}

export default ItemListContainer;