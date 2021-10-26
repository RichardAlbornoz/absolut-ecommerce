 import './App.css'
 import NavBar from './components/navBar/navBar';
 import ListContainer from './components/ItemListContainer/ItemListContainer';

  function App() {

   return (
     <><NavBar />
     <div>
       <ListContainer greeting="Cuantos productos quieres agregar?" /> 
     </div></>
   );
 }

 export default App;