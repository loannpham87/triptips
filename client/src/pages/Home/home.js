import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import BrandStatement from "../../components/BrandStatement/brandStatement";
import "../../components/BrandStatement/brandStatement.css";
import Logo from "../../components/Logo/logo";
import "../../components/Logo/logo.css";
import Footer from "../../components/Footer/footer";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bkg">
          <img
            src="./../../images/initial-login-bkg-photo.jpg"
            className="bkg-photo"
            alt="background"
          />
        </div>
        <Logo />

        <BrandStatement />
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
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
