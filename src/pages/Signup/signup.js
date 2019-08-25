import React, { Component } from "react";
// import "bootstrap/dist/css.bootstrap.css";
// import SignUpForm from "./../../components/signupForm/signupForm";
import Form from "./../../components/form/form";
import Input from "./../../components/input/input";
import Button from "./../../components/button/button";
import "./signup.css";

class Signup extends Component {
  state={
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confrimPassword: ""
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({ [name] : value});
    // console.log(this.state());
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <React.Fragment>
        {/* <div className="App">
          <header className="main-header">
            <img src="./../../images/transparent-bkg.png" className="logo" alt="logo" />
          </header>
        </div> */}
  
        <div className="container">
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
                          src="../local-eats.jpg"
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
                          src="../culture.jpg"
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
                          src="../stay.jpg"
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
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="next"
                    // onClick={carouselScroll}
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
  
            <div className="col">
              <div className="signup">
                {/* <SignUpForm />   */}
                <Form>
                  <Input type="text" name="firstName" className="form-control" placeholder="First Name" onChange={this.handleChange}/>
                  <Input type="text" name="lastName" className="form-control" placeholder="Last Name" onChange={this.handleChange}/>
                  <Input type="text" name="username" className="form-control" placeholder="Username" onChange={this.handleChange}/>
                  <Input type="text" name="email" className="form-control" placeholder="Email" onChange={this.handleChange}/>
                  <Input type="password" name="password" className="form-control" placeholder="Password" onChange={this.handleChange}/>
                  <Input type="password" name="confrimPassword" className="form-control" placeholder="Confrim Password" onChange={this.handleChange}/>
                </Form>

                {/* <button className="btn btn-success" type="button" onClick={this.handleSubmit}>Submit</button> */}
                <Button className="btn btn-success" type="button" onClick={this.handleSubmit} text="Submit"/>
                
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup;
