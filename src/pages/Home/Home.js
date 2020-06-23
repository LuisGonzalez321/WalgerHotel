import React, { Component } from "react";
import Menu from "../menu/Menu";
import HeaderM from "../../Components/HeaderM";
import Card from "../../Components/Card";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <Menu />
          <div className="col">
            <HeaderM titulo="Sistema de reservaciones" usuario="Luis Gabriel" />
            <p>
              Es un sistema web que se encarga reservar habitaciones del hotel
            </p>
            <div className="row justify-content-center">
              <Card
                titulo="Clientes"
                enlace="/cliente"
                icono="zmdi zmdi-accounts"
              />
              <Card
                titulo="Habitacion"
                enlace="/Reservas"
                icono="zmdi zmdi-hotel"
              />
              <Card
                titulo="Reservas"
                enlace="/Reservas"
                icono="zmdi zmdi-timer"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
