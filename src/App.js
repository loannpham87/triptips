import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/Login/login.js";
import Signup from "./pages/Signup/signup";
import Profile from "./pages/Profile/profile";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
