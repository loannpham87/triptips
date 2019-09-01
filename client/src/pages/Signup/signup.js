import React, { Component } from "react";
// import "bootstrap/dist/css.bootstrap.css";
import "./signup.css";
import Header from "../../components/Header/header";
// import "../../components"
import Logo from "../../components/Logo/logo";
import "../../components/Logo/logo.css";
import Footer from "../../components/Footer/footer";

function Signup() {
  return (
    <React.Fragment>
      <Header />
      <Logo />
      <div class="container">
        <div class="row">
          <div class="col">
            <div className="carousel">
              <div class="bd-example">
                <div
                  id="carouselExampleCaptions"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <ol class="carousel-indicators">
                    <li
                      data-target="#carouselExampleCaptions"
                      data-slide-to="0"
                      class="active"
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
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="./../../images/local-eats.jpg"
                        class="d-block w-100"
                        alt="local eats"
                        className="d-block"
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Check out the local food scene.</h5>
                        <p>Discover local eats.</p>
                      </div>
                    </div>

                    <div class="carousel-item">
                      <img
                        src="./../../images/culture.jpg"
                        class="d-block w-100"
                        alt="culture"
                        className="d-block"
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Immerse yourself in culture.</h5>
                        <p>Seek out history.</p>
                      </div>
                    </div>

                    <div class="carousel-item">
                      <img
                        src="./../../images/stay.jpg"
                        class="d-block w-100"
                        alt="stay"
                        className="d-block"
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>That bucket list won't check itself.</h5>
                        <p>Stay somewhere with a view.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true" />
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true" />
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div className="signup">
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last Name"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email Address"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
              </form>

              <button className="signup-btn">
                <a href="/profile">Sign-up</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

// function carouselScroll() {
//   function handleClick(e) {
//     e.preventDegault();
//   }
// }

// return (

// )

export default Signup;
