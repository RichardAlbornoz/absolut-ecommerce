 import './App.css'
 import NavBar from './components/navBar/navBar';
 import ListContainer from './conteiner/ItemListContainer/ItemListContainer/ItemListContainer';
 import ItemDetailContainer from './conteiner/ItemListContainer/ItemDetailContainer/itemDetailContainer';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';

  function App() {

   return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/">
              <ListContainer greeting="Botellas" />
          </Route>
          <Route exact path="/categoria/:categoryID">
               <ListContainer greeting="Productos" />
          </Route>
          <Route exact path="/item/:itemID">
               <ItemDetailContainer />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

 export default App;