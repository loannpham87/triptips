import React, { Component } from "react";
import "./profile.css";
import Post from './../../components/Post/post'

function Profile() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="main-header">
          <img src="./../../images/transparent-bkg.png" className="logo" alt="logo" />
        </header>
      </div>
      <div>
        <Post/>
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

export default Profile;
