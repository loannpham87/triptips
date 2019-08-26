import React, { Component } from "react";
// import Loginform from "./../../components/loginForm/loginForm";
import Form from "./../../components/form/form";
import Input from "./../../components/input/input";
import Button from "./../../components/button/button";
import "./login.css";

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
      {/* <div className="App">
        <header className="main-header">
          <img src="./../../images/transparent-bkg.png" className="logo" alt="logo" />
        </header>
      </div> */}

      <div className="bkg">
        {/* <img
          src="./../../images/login-bkg-photo.jpg"
          className="bkg-photo"
          alt="background"
        /> */}

        <div className="login-form">
          <div className="col">
            <Form>
              <Input type="text" className="form-control" name="username" placeholder="username" onChange={this.handleChange}/>
              <Input type="password" className="form-control" name="password" placeholder="password" onChange={this.handleChange}/>
            </Form>
            <Button className="login-btn" onClick={this.handleSubmit} text="Login"/>
          </div>
        </div>
      </div>
    </React.Fragment>
    )
  }
}

export default Login;