import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../img/Fondo_Menu.jpg";

import "./style.css";

const Menu = () => {
  const [active] = useState({
    estado: false,
    opacidad: `0,1`,
  });

  const Navegacion = ({ show }) => {
    return (
      <div className="barra-lateral col-12 col-sm-auto">
        <div className="logo">
          <img className="img img-fluid" src={LogoImg} alt="" />
          <h2>HOTEL</h2>
        </div>
        <nav className="menu d-flex d-sm-block justify-content-center flex-wrap">
          <Link to="/Home">
            <div className="icono-text">
              <i className="zmdi zmdi-home zmdi-hc-fw"></i>
              <span>Inicio</span>
            </div>
          </Link>

          <div className="icono-text">
            <Link to="/Habitacion">
              <i className="zmdi zmdi-hotel"></i>
              <span>Habitaciones</span>
            </Link>
          </div>

          <div className="icono-text">
            <Link to="/Reservas">
              <i className="zmdi zmdi-alarm zmdi-hc-fw"></i>
              <span>Reservas</span>
            </Link>
          </div>

          <div className="icono-text">
            <Link to="/cliente">
              <i className="zmdi zmdi-accounts"></i>
              <span>Clientes</span>
            </Link>
          </div>

          <div className="icono-text">
            <Link to="/">
              <i className="zmdi zmdi-power"></i>
              <span>Salir</span>
            </Link>
          </div>
        </nav>
      </div>
    );
  };

  //const mostrar = ()=>setState(!active);

  return (
    <React.Fragment>
      <Navegacion show={active} />
    </React.Fragment>
  );
};

export default Menu;
