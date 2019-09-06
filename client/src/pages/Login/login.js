import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {loginUser } from "./../../actions/authActions";
import classnames from "classnames";
import "./login.css";

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
    if(this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
  }

  // static getDerivedStateFromProps(nextProps) {
  //   if(nextProps.auth.isAuthenticated) {
  //     this.props.history.push("/profile");
  //   }

  //   if (nextProps.errors) {
  //     this.setState({
  //       errors: nextProps.errors
  //     });
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticaed) {
      this.props.history.push("/profile");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  // componentDidUpdate(nextProps) {
  //   if(nextProps.auth.isAuthenticated) {
  //     console.log("working");
  //     this.props.history.push("/profile");
  //   }

  //   if (nextProps.errors) {
  //     this.setState({
  //       errors: nextProps.errors
  //     });
  //   }
  // }

  // static getDerivedStateFromProps(nextProps) {
  //   if (nextProps.auth.isAuthenticaed) {
  //     console.log("working");
  //     const history = "/profile";
  //     // this.props.history.push("/profile");
  //     return history;
  //   }

  //   if (nextProps.errors) {
  //     // this.setState({
  //     //   errors: nextProps.errors
  //     // });
  //     const { errors } = nextProps.errors;
  //     return errors;
  //   }

  //   return nextProps;
  // }

  onChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  }

  onSubmit = event => {
    event.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    // console.log(userData);

    this.props.loginUser(userData, this.props.history);
  }

  render(){
    const { errors } = this.state;
    return(
    //   <React.Fragment>
    //   <div className="App">
    //     <header className="main-header">
    //       <img src="./../../images/transparent-bkg.png" className="logo" alt="logo" />
    //     </header>
    //   </div>

    //   <div className="bkg">
    //     <img
    //       src="./../../images/login-bkg-photo.jpg"
    //       className="bkg-photo"
    //       alt="background"
    //     />

    //     <div className="login-form">
    //       <div className="col">
    //         <form>
    //           <div className="form-group">
    //             <input
    //               type="text"
    //               className="form-control"
    //               name="username"
    //               placeholder="username"
    //               onChange={this.handleChange}
    //             />
    //           </div>
    //           <div className="form-group">
    //             <input
    //               type="password"
    //               className="form-control"
    //               name="password"
    //               placeholder="password"
    //               onChange={this.handleChange}
    //             />
    //           </div>
    //         </form>

    //         <button className="login-btn" onClick={this.handleSubmit}>
    //           Login
    //           {/* <a href="/profile">Login</a> */}
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </React.Fragment>
      <div className="container">
        <div className="row">
        <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
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
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  onSubmit={this.onSubmit}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
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