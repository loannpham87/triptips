import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "./../../actions/authActions";
import classnames from "classnames";
import "./signup.css";
import Header from "../../components/Header/header";
import "../../components/Header/header.css";
// import "../../components"
import Logo from "../../components/Logo/logo";
import "../../components/Logo/logo.css";
import Footer from "../../components/Footer/footer";
import "../../components/Footer/footer.css";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Signup page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <Logo />
        <Header />
        <div className="container-carousel">
          <div className="row">
            <div className="col">
              <div className="carousel">
                <div className="bd-example">
                  <div
                    id="carouselExampleCaptions"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to="0"
                        className="active"
                      />
                      <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to="1"
                      />
                      <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to="2"
                      />
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="./images/local-eats.jpg"
                          className="d-block w-100"
                          alt="local eats"
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Discover local eats.</h5>
                          <p>Check out the local food scene.</p>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <img
                          src="./images/culture.jpg"
                          className="d-block w-100"
                          alt="culture"
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Immerse yourself in culture.</h5>
                          <p>Seek out historical sites.</p>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <img
                          src="./images/stay.jpg"
                          className="d-block w-100"
                          alt="stay"
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Stay somewhere with a view.</h5>
                          <p>That bucket list won't check itself.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="next"
                    // onClick={carouselScroll}
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="formGroup">
                <form
                  noValidate
                  onSubmit={this.onSubmit}
                  className="signupForm"
                >
                  <div className="input-field col s12">
                    <input
                      type="text"
                      id="name"
                      onChange={this.onChange}
                      value={this.state.name}
                      errors={errors.name}
                      // placeholder="Name"
                      className={classnames("", {
                        invalid: errors.name
                      })}
                    />
                    <label htmlFor="name" className="label">
                      Name
                    </label>
                    <span className="red-text">{errors.name}</span>
                  </div>
                  <div className="input-field col s12">
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      // placeholder="E-mail address"
                      type="text"
                      id="email"
                      className={classnames("", {
                        invalid: errors.email
                      })}
                    />
                    <label htmlFor="email" className="label">
                      E-mail Address
                    </label>
                    <span className="red-text">{errors.email}</span>
                  </div>
                  <div className="input-field col s12">
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      errors={errors.password}
                      // placeholder="Password"
                      type="password"
                      id="password"
                      className={classnames("", {
                        invalid: errors.password
                      })}
                    />
                    <label htmlFor="password" className="label">
                      Password
                    </label>
                    <span className="red-text">{errors.password}</span>
                  </div>
                  <div className="input-field col s12">
                    <input
                      onChange={this.onChange}
                      value={this.state.password2}
                      errors={errors.password2}
                      // placeholder="Confirm Password"
                      type="password"
                      id="password2"
                      className={classnames("", {
                        invalid: errors.password
                      })}
                    />
                    <label htmlFor="password2" className="label">
                      Confirm Password
                    </label>
                    <span className="red-text">{errors.password2}</span>
                  </div>
                  <div className="col s12">
                    <button
                      type="submit"
                      className=" signup-btn signUpBtn btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

// export default Signup;
Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Signup));
