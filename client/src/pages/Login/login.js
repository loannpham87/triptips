import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "./../../actions/authActions";
import classnames from "classnames";
import "./login.css";
import Logo from "../../components/Logo/logo";
import "../../components/Logo/logo.css";
import Header from "../../components/Header/header";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    //If logged in and user navigates to Login page, should redirect them to the profile page
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticaed) {
      this.props.history.push("/profile");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <Logo />
        <Header />
        <div className="bkg">
          <img
            src="./../../images/login-bkg-photo.jpg"
            className="bkg-photo"
            alt="background"
          />

          <button className="login-btn" onClick={this.handleSubmit}>
            Login
            <a href="/profile">Login</a>
          </button>
        </div>

        <div className="container">
          <div className="row">
            <div className="col s8 offset-s2">
              <h4>
                <Link to="/" className="btn-flat waves-effect">
                  <i className="material-icons left">
                    keyboard_backspace<br></br>
                  </i>{" "}
                  Back to home
                </Link>
              </h4>

              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <b>Login</b> below
                <p className="grey-text text-darken-1">
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
              </div>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                    className={classnames("", {
                      invalid: errors.email || errors.emailnotfound
                    })}
                  />
                  <label htmlFor="email">Email</label>
                  <span className="red-text">
                    {errors.email}
                    {errors.emailnotfound}
                  </span>
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                    className={classnames("", {
                      invalid: errors.password || errors.passwordincorrect
                    })}
                  />
                  <label htmlFor="password">Password</label>
                  <span className="red-text">
                    {errors.password}
                    {errors.passwordincorrect}
                  </span>
                </div>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <button
                    className="login-btn"
                    style={{
                      width: "250px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem",
                      padding: "12px 24px",
                      border: "none",
                      cursor: "pointer",
                      margin: "10px",
                      position: "relative",
                      right: "67%",
                      top: "50px"
                    }}
                    
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);

// export default Login;
