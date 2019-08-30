import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends Component {
  render(){
  return (
    <React.Fragment>
      <div className="App">
        <header className="main-header">
          <img src="./../../images/transparent-bkg.png" className="logo" alt="logo" />
        </header>
      </div>

      <div className="bkg">
        <img
          src="./../../images/initial-login-bkg-photo.jpg"
          className="bkg-photo"
          alt="background"
        />
      </div>

      <div className="btn-container">
        <div className="col s6">
          <Link
            to="/login"
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Login
            </Link>
        </div>

        <div className="col s6">
          <Link
            to="/signup"
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Sign Up
            </Link>
        </div>
      </div>

    </React.Fragment>

    )
  }
}

export default Home;
