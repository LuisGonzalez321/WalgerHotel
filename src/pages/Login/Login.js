import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Login extends Component {
  TextoP = ({ flag }) => {
    const style = {
      color: `red`,
    };

    if (!flag) return <p style={style}>Usuario o contraseña incorrecta!!</p>;
    else return null;
  };

  state = {
    nombreUsuario: "",
    contraseña: "",
    estado: true,
  };

  nombreUsuario = React.createRef();
  contraseña = React.createRef();

  style = {};

  hadleClick = (event) => {
    event.preventDefault();

    let nombreUsuario = this.nombreUsuario.current.value;
    let contraseña = this.contraseña.current.value;

    if (nombreUsuario === "" || contraseña === "") {
      this.setState({ estado: false });
    } else {
      this.setState({
        nombreUsuario,
        contraseña,
        estado: true,
      });
      console.log(this.state.nombreUsuario);
    }
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="columna col-6 img-fluid">
          <h3 className="display-6 d-1">Sistema de reservación</h3>
          <h2 className="display-2 d-2">Hotel</h2>
          <div className="icono"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            animi est error dicta, unde accusamus enim voluptate, numquam,
            dolore labore repellat nostrum omnis! Et, quasi ducimus fugit
            architecto voluptas vel?
          </p>
        </div>
        <div className="col-6 contenedor-form">
          <h2 className="login-text">Login Account</h2>
          <form>
            <div className="form-group row form-g">
              <div className="col-10">
                <label htmlFor="nombre">Nombre de usuario</label>
                <input
                  className="form-control"
                  ref={this.nombreUsuario}
                  id="nombre"
                  type="text"
                  placeholder="Luis"
                />
              </div>
            </div>

            <div className="form-group row form-g">
              <div className="col-10">
                <label htmlFor="pass">Contraseña</label>
                <input
                  className="form-control"
                  ref={this.contraseña}
                  id="pass"
                  type="password"
                  placeholder=""
                />
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-auto col-btn">
                <Link to="/Home" className="boton">
                  Ingresar
                </Link>
                <br />
                <br />
                <Link to="/Main" className="enlace">
                  Ha olvidado la contraseña?
                </Link>
                <this.TextoP flag={this.state.estado} />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;