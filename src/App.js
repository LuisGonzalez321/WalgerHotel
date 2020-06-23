import React, { Component } from "react";
import "../src/css/bootstrap.css";
import Home from "../src/pages/Home/Home";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Reservas from "./pages/Reservas/Reservas";
import Habitacion from "./pages/Habitación/Habitacion";
import Cliente from "./pages/Clientes/Cliente";
import "./css/material-design-iconic-font.min.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="container-fluid">
            <Route path="/" exact component={Login} />
            <Route path="/Home" exact component={Home} />
            <Route path="/Reservas" exact component={Reservas} />
            <Route path="/Habitacion" exact component={Habitacion} />
            <Route path="/Cliente" component={Cliente} />
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
