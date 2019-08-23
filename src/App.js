import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";
import Profile from "./pages/Profile/profile";
import Header from "./components/Header/header";
import Post from "./components/Post/post";
import "./App.css";
import Navbar from "./components/NavBar/navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



// class App extends Component {
//       render() {
//         return (
//           <div>
//         <Header />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/login" component={Login} />
//           <Route exact path="/signup" component={Signup} />
//           <Route exact path="/profile" component={Profile} />
//         </Switch>
//             <div>
//               <Post />
//             </div>
//           </div>
//         );
//       }
//     }
//     export default App;

