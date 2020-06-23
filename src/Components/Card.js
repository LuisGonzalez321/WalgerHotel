import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
//import '../css/material-design-iconic-font.min.css'

class Card extends Component {
  render() {
    return (
      <div className="col-3  columna-card">
        <div className="card">
          <div className="card-block">
            <div className="card-header">{this.props.titulo}</div>
            <div className="full-icon ">
              <i className={this.props.icono}></i>
            </div>
            <div className="contenedor-boton">
              <Link className="btn btn-block" to={this.props.enlace}>
                Ir
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
