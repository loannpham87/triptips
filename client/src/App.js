import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import ApolloClient from 'apollo-boost';
import jwt_decode from "jwt-decode";
import { Provider } from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import store from "./store";

import Home from "./pages/Home/home";
// import Boards from "./pages/Boards/boards";
import Login from "./pages/Login/login.js";
import Signup from "./pages/Signup/signup";
import Profile from "./pages/Profile/profile";
import Upload from "./pages/Upload/upload";

import "./App.css";


//Check for token to keep user logged in
if (localStorage.jwtToken) {
  //Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  //Decode token and get user info and exp
  const decoded = jwt_decode(token);
  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  //Check for expired token
  const currentTime = Date.now() / 1000; //to get in milliseconds
  if (decoded.exp < currentTime) {
    //Logut user
    store.dispatch(logoutUser());
    //Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
              <Switch>
                {/* <Navbar/> */}
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/boards" component={Boards} /> */}
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile" component={Profile} />
                <Route exact Post="/upload" component={Upload} />
              </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
