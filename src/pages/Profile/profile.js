import React, { Component } from "react";
import "./profile.css";
import Posts from "./../../components/Posts/posts";

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import Pusher from 'pusher-js';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});


// function Profile() 
class Profile extends Component {
  constructor(){
    super();
    // connect to pusher
    this.pusher = new Pusher("PUSHER_APP_KEY", {
     cluster: 'eu',
     encrypted: true
    });
  }
  // Notifications
  componentDidMount(){
    if ('actions' in Notification.prototype) {
      console.log('You can enjoy notification feature');
    } else {
      console.log('Sorry notifications are NOT supported on your browser');
    }
  }
  render(){
  return (
    <ApolloProvider client={client}>
      <div className="App">
          <section className="App-main">
            {/* pass the pusher object to the posts component */}
            <Posts pusher={this.pusher} apollo_client={client}/>
          </section> 
      </div>
        </ApolloProvider>
  )
  }
}

export default Profile;



// // function Profile() 
// class Profile extends Component {
//   render(){
//   return (
//     <React.Fragment>
//       <div className="App">
//         <header className="main-header">
//           <img src="./../../images/transparent-bkg.png" className="logo" alt="logo" />
//         </header>
//       </div>

//     </React.Fragment>
//   )
//   }
// }
