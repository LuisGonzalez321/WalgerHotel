import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import HeaderM from "../../Components/HeaderM";
import Menu from "../menu/Menu";
import "./style.css";

const ListCliente = () => {
  return (
    <div>
      <h3>Lista de Clientes</h3>
    </div>
  );
};

const AgregarCliente = () => {
  return (
    <div>
      <h3>Agregar nuevo cliente</h3>
    </div>
  );
};

class Cliente extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <Menu />
          <div className="col">
            <HeaderM titulo="Seccion de Clientes" />
            <div className="mb-5 mt-5">
              <h2>Listado de Clientes</h2>
            </div>
            <ul className="nav nav-tabs nav-fill">
              <li className="nav-item">
                <a className="nav-link" href="/Cliente/ListCliente">
                  Listar Cliente
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Cliente/AgregarCliente">
                  Agregar Cliente
                </a>
              </li>
            </ul>

            <BrowserRouter>
              <Route path="/Cliente/ListCliente" render={ListCliente} />
              <Route path="/Cliente/AgregarCliente" render={AgregarCliente} />
            </BrowserRouter>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cliente;
