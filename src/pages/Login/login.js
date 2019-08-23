import React, { Component } from "react";
import "./login.css";

function Login() {
  return (
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
          alt="background photo"
        />

        <div className="login-form">
          <div class="col">
            <form>
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
            </form>

            <button className="login-btn">
              <a href="/profile">Login</a>
            </button>
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

export default Login;
