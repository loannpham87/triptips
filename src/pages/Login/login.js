import React, { Component } from "react";
import "./login.css";

function Login() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="main-header">
          <img src="../transparent-bkg.png" className="logo" alt="logo" />
        </header>
      </div>

      <div className="bkg">
        <img
          src="../login-bkg-photo.jpg"
          className="bkg-photo"
          alt="background"
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
    </React.Fragment>
  );
}

export default Login;
