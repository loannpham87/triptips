import React, { Component } from "react";
import "./header.css";
// import Navbar from "./components/NavBar/navbar";


class Header extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Navbar/> */}
        <nav className="Nav">
          <div className="Nav-menus">
            
          </div>
        <header>
          <h1 className="header">TripTips</h1>
        </header>

        <div className="brand-statement">
          <p>Travel well. Travel better.</p>
        </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
