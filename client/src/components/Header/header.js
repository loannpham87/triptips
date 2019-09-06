import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <nav className="Nav"> */}
          {/* <div className="Nav-menus"></div> */}
          <div className="header">
          <header>
          <img
              src="./../../images/transparent-bkg.png"
              className="logo"
              alt="logo"
            />
            <h1 className="header">TripTips</h1>
          </header>
        {/* </nav> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
