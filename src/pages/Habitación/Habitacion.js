import React, { Component } from "react";
import Menu from "../menu/Menu";
import HeaderM from "../../Components/HeaderM";
import Slide from "../../Components/Slide";

class Habitacion extends Component {
  render() {
    return (
      <div className="row">
        <Menu />
        <div className="col">
          <HeaderM titulo="Seccion de habitaciones" usuario="Luis Gabriel" />
          <section>
            <Slide />
          </section>
        </div>
      </div>
    );
  }
}

export default Habitacion;
