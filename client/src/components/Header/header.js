import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="Nav">
          <div className="Nav-menus"></div>
          <header>
            <h1 className="header">TripTips</h1>
          </header>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
