import React, { Component } from "react";
import "./profile.css";
import Post from "../../components/Post/post";

function Profile() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="main-header">
          <img
            src="./../../images/transparent-bkg.png"
            className="logo"
            alt="logo"
          />
        </header>

        <div>
          <Post/>
        </div>
      </div>

      <div>
        <Post />
      </div>
    </React.Fragment>
  );
}

export default Profile;
