import React, { Component } from "react";
import "./home.css";

function Home() {
  return (
    <div className="App">
      <header className="main-header">
        <img src="../transparent-bkg.png" className="logo" alt="logo" />
      </header>

      <div className="btn-container">
        <img
          src="../initial-login-bkg-photo.jpg"
          className="bkg-photo"
          alt="background photo"
        />

        <button className="btn">
          <a href="/login">Login / Signup</a>
        </button>

        <div className="dev-cred">
          <footer>
            For more info on the devs of this project, please check out our
            GitHub portfolios:{" "}
            <a href="https://github.com/AmandaLuane"> Amanda Johnson |</a>
            <a href="https://github.com/loannpham87"> Loann Pham |</a>
            <a href="https://github.com/rdweston1995"> Robert Weston</a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Home;
