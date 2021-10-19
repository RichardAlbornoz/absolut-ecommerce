 import {useState} from "react";
 import './App.css'
 import NavBar from './components/navBar/navBar';
 import ListContainer from './components/ItemListContainer/ItemListContainer';
 import StockContador from "./components/ItemCount/itemCount";


 function App() {

   const [productos, setProductos]= useState (1)

   const add = () => {
     if (productos>10) {alert ('No hay tantos productos disponibles')}
   else {
     setProductos (productos+1)
   }
   }
   const remove = ()=>{
     if (productos>1){
       setProductos (productos-1)
     } else {
       alert ('No puedes agregar menos de 1 producto al carrito!')
     }
   }

 
   return (
     <><NavBar />
     <div>
       <ListContainer text="Lista de productos" />
       <h5 className="hProductos">Cuantos productos quieres agregar?</h5>
       <StockContador value={productos} sumarProducto={add} quitarProducto ={remove}/> 
     </div></>
   );
 }

 export default App;