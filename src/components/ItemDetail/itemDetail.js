import React, { useContext } from "react";
import "./itemDetail.css";
import StockContador from "../ItemCount/itemCount";
import CartContext from "../../context/cart/CartContext";
import { NavLink } from "react-router-dom";

const ItemDetails = ({ producto }) => {
  const { addToCart, showHideCart } = useContext(CartContext);

  const onAddHandle = (counter) => {
    showHideCart(false);
    addToCart(producto, counter);
  };

  return (
    <div className="container-fluid row col-11 col-sm-9 mt-5 align-content-center justify-content-center">
      <div className="col-12 col-lg-7 align-self-center">
        <img className="img-fluid" src={producto.imagen} alt="s" />
      </div>
      <div className="col-12 col-lg-5 mb-3 row justify-content-center">
        <div className="single_product_desc row justify-content-center">
          <div className="product-meta-data mb-3">
            <div className="line"></div>
            <p className="product-price">{producto.price}</p>

            <h3>{producto.tittle}</h3>

            {/* <!-- Ratings & Review --> */}
            <div className="ratings-review mb-15 d-flex align-items-center justify-content-between">
              <div className="ratings">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
              </div>
              <div className="review">
                <a href="/#">Escribe una reseña</a>
              </div>
            </div>
            <p className="avaibility">
              <i className="fa fa-circle"></i> Hay stock
            </p>
          </div>
          {/* Productos */}
          <div className="col-12 dropdown mb-2 px-2 row justify-content-start">
            <button
              className="btn btn-secondary dropdown-toggle col-5"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Botellas
            </button>
            <ul
              className="dropdown-menu "
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a className="dropdown-item" href="/#">
                  <b>4</b>{" "}
                  <span style={{ fontSize: `80%` }}>(ABSOLUT Raspberri)</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  <b>5</b>{" "}
                  <span style={{ fontSize: `80%` }}>(ABSOLUT India)</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  <b>6</b>{" "}
                  <span style={{ fontSize: `80%` }}>(ABSOLUT Mexico)</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  <b>7</b>{" "}
                  <span style={{ fontSize: `80%` }}>(ABSOLUT Elyx)</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  <b>8</b>{" "}
                  <span style={{ fontSize: `80%` }}>(ABSOLUT Rainbow)</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  <b>9</b>{" "}
                  <span style={{ fontSize: `80%` }}>(ABSOLUT Oak)</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  <b>10</b>{" "}
                  <span style={{ fontSize: `80%` }}>(ABSOLUT Pack)</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  <b>11</b>{" "}
                  <span style={{ fontSize: `80%` }}>(ABSOLUT Combo)</span>
                </a>
              </li>
            </ul>
          </div>
          {/* Descripcion */}
          <div className="short_overview my-5">
            <p>{producto.description}</p>
          </div>

          {
            <StockContador
              inicial={0}
              stock={producto.stock}
              id={producto.id}
              onAdd={onAddHandle}
              texto="Agregar al carrito"
            />
          }
        </div>
      </div>
      <button className="btn col-6 col-lg-3 mt-3 btnSeguirComprando">
        <NavLink className="fs-6" to={"/"}>
          Volver
        </NavLink>
      </button>
    </div>
  );
};

export default ItemDetails;