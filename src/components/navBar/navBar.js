import React from "react";
import '../navBar/estiloNavBar.css';
import '../CartWidget/cartWidget.js';
import CartWidget from "../CartWidget/cartWidget.js";

const NavBar =()=> {
    return(
        <nav className='nav'>
            <div className='container_title'>
                <h1 className='title'>ABSOLUT</h1>
            </div>
            <ul className="navUl">
                <li className="navLi"><a href="*" className="a">Inicio</a></li>
                <li className="navLi"><a href="*" className="a">Tienda</a></li>
                <li className="navLi"><a href="*" className="a">Promociones</a></li>
                <li className="navLi"><a href="*" className="a">Contacto</a></li>
            </ul>
            <div>
            <CartWidget />    
            </div>
        </nav>
    )
}
export default NavBar