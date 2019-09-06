    
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import  { logoutUser } from "./../../actions/authActions";
// import { Link } from "react-router-dom";
import "./profile.css";
import Posts from "../../components/Posts/posts";
import Navbar from "..//..//components/NavBar/navbar";
import Header from "..//..//components/Header/header";
import {Container} from "semantic-ui-react";
// import 'semantic-ui-css/semantic.min.css';




class Profile extends Component { 
  onLogoutClick  = event => {
    event.preventDefault();
    // this.props.logoutUser();

    this.props.logoutUser(this.props.history);
    console.log("logged out");

  }
  
  render() {
    const { user } = this.props.auth;
    console.log(user);
    return (
      <React.Fragment>
      <Header/>
      <Navbar/>

        <Container >
            <Posts/>

            {/* <div>
                <h1>{user.name}</h1>
              </div> */}

            <button
              onClick={this.onLogoutClick}
              >Logout</button>
              {/* <Link
                to="/login"
                className="btn btn-large waves-effect waves-light hoverable accent-3"
                onClick={this.onLogoutClick}
                >Logout</Link> */}
          </Container>
          </React.Fragment>
        );
  }
}

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Profile);







// function Profile(props) {
//   console.log(props);
//   return (
//     <React.Fragment>
//       <div className="App">
//         <header className="main-header">
//           <img
//             src="./../../images/transparent-bkg.png"
//             className="logo"
//             alt="logo"
//           />
//         </header>
//         <div>
//           TEST
//           {props.location.key}
//         </div>
//         {/* <div>
//           <Post/>
//         </div> */}
//       </div>

//       <div>
//         <Post />
//       </div>
//     </React.Fragment>
//   );
// }

// export default Profile;