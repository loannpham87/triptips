import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login.js";
import Signup from "./pages/Signup/signup";
import Profile from "./pages/Profile/profile";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Navbar from "./components/NavBar/navbar";
import Wrapper from "./components/Wrapper/wrapper";
import "./App.css";

import ApolloClient from 'apollo-boost';


const client = new ApolloClient({
      uri: "http://localhost:4000/graphql"
    });



    class App extends Component {
      render() {
      return (
      <Router>
      <div className="App">
      <Navbar />
      <Header />
      <Wrapper>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/profile" component={Profile} />
      </Switch>
      </Wrapper>
      <Footer />
      </div>
      </Router>
      );
      }
      }



export default App;






