import './App.css';
import NavBar from './components/navBar/navBar';
import ListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <><NavBar />
    <div>
        <ListContainer text="Lista de productos" />
    </div></>
  );
}

export default App;
