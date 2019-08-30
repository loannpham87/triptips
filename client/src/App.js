import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from 'apollo-boost';
import Pusher from 'pusher-js';
import jwt_decode from "jwt-decode";
import { Provider } from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import store from "./store";

import Home from "./pages/Home/home";
import Login from "./pages/Login/login.js";
import Signup from "./pages/Signup/signup";
import Profile from "./pages/Profile/profile";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Navbar from "./components/NavBar/navbar";
import Post from "./components/Post/post";
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

// const client = new ApolloClient({
//         uri : "http://localhost:4000"
//     })

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  constructor() {
    super();
    // connect to pusher
    this.pusher = new Pusher("PUSHER_APP_KEY", {
      cluster: 'eu',
      encrypted: true
    });
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>

            <Navbar />
            <ApolloProvider client={client}>
              <div className="App">
                <Header />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/profile" component={Profile} />
                </Switch>
                {/* <section className="App-main">
                  <Post />
                </section> */}
              </div>
            </ApolloProvider>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}



export default App;

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Navbar />
//           <Header/>
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route exact path="/login" component={Login} />
//             <Route exact path="/signup" component={Signup} />
//             <Route exact path="/profile" component={Profile} />
//           </Switch>
//           <Footer />
//         </div>
//       </Router>
//     );
//   }
// }


// const App = () => {
//   return (
//     <Router>
//     <div>
//     <Navbar />
//     <ApolloProvider client={client}>
//       <div className="App">
//         <Header />
//         <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/login" component={Login} />
//         <Route exact path="/signup" component={Signup} />
//         <Route exact path="/profile" component={Profile} />
//       </Switch>
//         <section className="App-main">
//           <Post />
//         </section>
//       </div>
//     </ApolloProvider>
//     <Footer />
//     </div>
//   </Router>
//   );
// };



