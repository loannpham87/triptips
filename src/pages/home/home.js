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

        <button className="btn">Login / Signup</button>
      </div>
    </div>
  );
}

export default Home;
