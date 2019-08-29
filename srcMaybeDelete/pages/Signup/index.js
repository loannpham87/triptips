import React, { Component } from "react";
// import "bootstrap/dist/css.bootstrap.css";
import "./signup.css";

function Signup() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="main-header">
          <img src="../transparent-bkg.png" className="logo" alt="logo" />
        </header>
      </div>

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
                        src="../local-eats.jpg"
                        class="d-block w-100"
                        alt="local eats"
                        className="d-block"
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Discover local eats.</h5>
                        <p>Check out the local food scene.</p>
                      </div>
                    </div>

                    <div class="carousel-item">
                      <img
                        src="../culture.jpg"
                        class="d-block w-100"
                        alt="culture"
                        className="d-block"
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Immerse yourself in culture.</h5>
                        <p>Seek out historical sites.</p>
                      </div>
                    </div>

                    <div class="carousel-item">
                      <img
                        src="../stay.jpg"
                        class="d-block w-100"
                        alt="stay"
                        className="d-block"
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Stay somewhere with a view.</h5>
                        <p>That bucket list won't check itself.</p>
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
                    placeholder="Email address"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="username"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="password"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="confirm password"
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

      <div className="dev-cred">
        <footer>
          For more info on the devs of this project, please check out our GitHub
          portfolios:{" "}
          <a href="https://github.com/AmandaLuane"> Amanda Johnson |</a>
          <a href="https://github.com/loannpham87"> Loann Pham |</a>
          <a href="https://github.com/rdweston1995"> Robert Weston</a>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default Signup;
