import React, { Component } from "react";
import "./styles.css";

class header extends Component {
  render() {
    return (
      <header>
        <nav>
          <img src="https://i.imgur.com/KDIDiSE.png" />
          <div>
              <span>Meu Perfil</span>
              <i className="material-icons">account_circle</i>
          </div>
        </nav>
      </header>
    );
  }
}

export default header;
