import React, { Component } from "react";
import "./logo.css";

class Logo extends Component {
  render() {
    return (
      <React.Fragment>
          <header className="main-header">
          <img
            src="./../../images/transparent-bkg.png"
            className="logo"
            alt="logo"
          />
        </header>
      </React.Fragment>
    );
  }
}

export default Logo;
