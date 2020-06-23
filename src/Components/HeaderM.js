import React, { Component } from "react";

class HeaderM extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="nav  d-flex justify-content-start">
          <h1 className="my-auto pl-3">{this.props.titulo}/</h1>
          <h3 className="my-auto mr-auto">{this.props.usuario}</h3>
          <div>
            <div className="title-icon">
              <i className="zmdi zmdi-help-outline zmdi-hc-fw"></i>
            </div>
            <div className="title-icon">
              <i className="zmdi zmdi-search"></i>
            </div>
            <div className="title-icon">
              <i className="zmdi zmdi-power"></i>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default HeaderM;
