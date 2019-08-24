import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login.js";
import Signup from "./pages/Signup/signup";
import Profile from "./pages/Profile/profile";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Navbar from "./components/NavBar/navbar";
import Post from "./components/Post/post";
import "./App.css";
import { ApolloProvider } from "react-apollo";
import ApolloClient from 'apollo-boost';
import Pusher from 'pusher-js';


// const client = new ApolloClient({
//         uri : "http://localhost:4000"
//     })

const client = new ApolloClient({
      uri: "http://localhost:4000/graphql"
    });

    class App extends Component {
      constructor(){
        super();
        // connect to pusher
        this.pusher = new Pusher("PUSHER_APP_KEY", {
         cluster: 'eu',
         encrypted: true
        });
      }
      render() {
        return (
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
            <section className="App-main">
              <Post />
            </section>
          </div>
        </ApolloProvider>
        <Footer />
        </div>
      </Router>
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

