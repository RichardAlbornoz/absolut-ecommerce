 import './App.css'
 import NavBar from './components/navBar/navBar';
 import ListContainer from './conteiner/ItemListContainer/ItemListContainer/ItemListContainer';
 import ItemDetailContainer from './conteiner/ItemListContainer/ItemDetailContainer/itemDetailContainer';

  function App() {

   return (
     <><NavBar />
     <div>
       <ListContainer greeting="Cuantos productos quieres agregar?" />
       <ItemDetailContainer/> 
     </div></>
   );
 }

 export default App;