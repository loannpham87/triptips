import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "./../../actions/authActions";
import classnames from "classnames";
import "./signup.css";

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
    // if (this.props.auth.isAuthenticated) {
    //   this.props.history.push("/profile");
    // }
  }

  getDerivedStateFromProps(nextProps) {
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
    return(
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="formGroup">
              <form noValidate onSubmit={this.onSubmit} className="signupForm">
                <div className="input-field col s12">
                  <input
                    type="text"
                    id="name"
                    onChange={this.onChange}
                    value={this.state.name}
                    errors={errors.name}
                    className={classnames("", {
                      invalid: errors.name
                    })}
                  />
                  <label htmlfor="name">Name</label>
                  <span className="red-text">{errors.name}</span>
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    type="text"
                    id="email"
                    className={classnames("", {
                      invalid: errors.email
                    })}
                  />
                  <label htmlfor="email">Email</label>
                  <span className="red-text">{errors.email}</span>
                </div>
                <div className="input-field col s12">
                  <input 
                    onChange={this.onChange}
                    value={this.state.password}
                    errors={errors.password}
                    type="password"
                    id="password"
                    className={classnames("", {
                      invalid: errors.password
                    })}
                  />
                  <label htmlfor="password">Password</label>
                  <span className="red-text">{errors.password}</span>
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.password2}
                    errors={errors.password2}
                    type="password"
                    id="password2"
                    className={classnames("", {
                      invalid: errors.password
                    })}
                  />
                  <label htmlfor="password2">Confirm Password</label>
                  <span className="red-text">{errors.password2}</span>
                </div>
                <div className="col s12">
                  <button
                    type="submit"
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                    Sign Up
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
    )
  }
}

// function Signup() {
//   return (
//     <React.Fragment>
//       <div className="App">
//         <header className="main-header">
//           <img src="./../../images/transparent-bkg.png" className="logo" alt="logo" />
//         </header>
//       </div>

//       <div class="container">
//         <div class="row">
//           <div class="col">
//             <div className="carousel">
//               <div class="bd-example">
//                 <div
//                   id="carouselExampleCaptions"
//                   class="carousel slide"
//                   data-ride="carousel"
//                 >
//                   <ol class="carousel-indicators">
//                     <li
//                       data-target="#carouselExampleCaptions"
//                       data-slide-to="0"
//                       class="active"
//                     />
//                     <li
//                       data-target="#carouselExampleCaptions"
//                       data-slide-to="1"
//                     />
//                     <li
//                       data-target="#carouselExampleCaptions"
//                       data-slide-to="2"
//                     />
//                   </ol>
//                   <div class="carousel-inner">
//                     <div class="carousel-item active">
//                       <img
//                         src="../local-eats.jpg"
//                         class="d-block w-100"
//                         alt="local eats"
//                         className="d-block"
//                       />
//                       <div class="carousel-caption d-none d-md-block">
//                         <h5>Discover local eats.</h5>
//                         <p>Check out the local food scene.</p>
//                       </div>
//                     </div>

//                     <div class="carousel-item">
//                       <img
//                         src="../culture.jpg"
//                         class="d-block w-100"
//                         alt="culture"
//                         className="d-block"
//                       />
//                       <div class="carousel-caption d-none d-md-block">
//                         <h5>Immerse yourself in culture.</h5>
//                         <p>Seek out historical sites.</p>
//                       </div>
//                     </div>

//                     <div class="carousel-item">
//                       <img
//                         src="../stay.jpg"
//                         class="d-block w-100"
//                         alt="stay"
//                         className="d-block"
//                       />
//                       <div class="carousel-caption d-none d-md-block">
//                         <h5>Stay somewhere with a view.</h5>
//                         <p>That bucket list won't check itself.</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <a
//                   class="carousel-control-prev"
//                   href="#carouselExampleCaptions"
//                   role="button"
//                   data-slide="prev"
//                 >
//                   <span class="carousel-control-prev-icon" aria-hidden="true" />
//                   <span class="sr-only">Previous</span>
//                 </a>
//                 <a
//                   class="carousel-control-next"
//                   href="#carouselExampleCaptions"
//                   role="button"
//                   data-slide="next"
//                   // onClick={carouselScroll}
//                 >
//                   <span class="carousel-control-next-icon" aria-hidden="true" />
//                   <span class="sr-only">Next</span>
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div class="col">
//             <div className="signup">
//               <form>
//                 <div class="form-group">
//                   <input
//                     type="text"
//                     class="form-control"
//                     placeholder="First Name"
//                   />
//                 </div>

//                 <div class="form-group">
//                   <input
//                     type="text"
//                     class="form-control"
//                     placeholder="Last Name"
//                   />
//                 </div>

//                 <div class="form-group">
//                   <input
//                     type="text"
//                     class="form-control"
//                     placeholder="Email Address"
//                   />
//                 </div>
//                 <div class="form-group">
//                   <input
//                     type="text"
//                     class="form-control"
//                     placeholder="Username"
//                   />
//                 </div>
//                 <div class="form-group">
//                   <input
//                     type="password"
//                     class="form-control"
//                     placeholder="Password"
//                   />
//                 </div>
//                 <div class="form-group">
//                   <input
//                     type="password"
//                     class="form-control"
//                     placeholder="Confirm Password"
//                   />
//                 </div>
//               </form>

//               <button className="signup-btn">
//                 <a href="/profile">Sign-up</a>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }

// function carouselScroll() {
//   function handleClick(e) {
//     e.preventDegault();
//   }
// }

// return (

// )

// export default Signup;
signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
    { registerUser }
)(withRouter(Register));

