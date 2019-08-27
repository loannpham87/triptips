import React, { Component } from "react";
import "./login.css";

// function Login() {
//   return (
//     <React.Fragment>
//       <div className="App">
//         <header className="main-header">
//           <img src="../transparent-bkg.png" className="logo" alt="logo" />
//         </header>
//       </div>

//       <div className="bkg">
//         <img
//           src="../login-bkg-photo.jpg"
//           className="bkg-photo"
//           alt="background"
//         />

//         <div className="login-form">
//           <div class="col">
//             <form>
//               <div class="form-group">
//                 <input
//                   type="text"
//                   class="form-control"
//                   placeholder="username"
//                 />
//               </div>
//               <div class="form-group">
//                 <input
//                   type="password"
//                   class="form-control"
//                   placeholder="password"
//                 />
//               </div>
//             </form>

//             <button className="login-btn">
//               <a href="/profile">Login</a>
//             </button>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("Username " + this.state.username);
    console.log("Password " + this.state.password);
  }

  render(){
    return(
      <React.Fragment>
      <div className="App">
        <header className="main-header">
          <img src="./../../images/transparent-bkg.png" className="logo" alt="logo" />
        </header>
      </div>

      <div className="bkg">
        <img
          src="./../../images/login-bkg-photo.jpg"
          className="bkg-photo"
          alt="background"
        />

        <div className="login-form">
          <div className="col">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="password"
                  onChange={this.handleChange}
                />
              </div>
            </form>

            <button className="login-btn" onClick={this.handleSubmit}>
              Login
              {/* <a href="/profile">Login</a> */}
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
    )
  }
}

export default Login;