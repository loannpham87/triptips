import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import  { logoutUser } from "./../../actions/authActions";
import { Link } from "react-router-dom";
import "./profile.css";
import Post from "../../components/Post/post";

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

class Profile extends Component { 
  onLogoutClick  = event => {
    event.preventDefault();
    // this.props.logoutUser();

    this.props.logoutUser();

  }
  
  render() {
    const { user } = this.props.auth;
    console.log(user);
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
                {/* { this.state} */}
                {user.name}
              </div>
              {/* <div>
                <Post/>
              </div> */}
            </div>
      
            <div>
              <Post />
            </div>

            {/* <button
              onClick={this.onLogoutClick}
              >Logout</button> */}
              <Link
                to="/login"
                className="btn btn-large waves-effect waves-light hoverable accent-3"
                onClick={this.onLogoutClick}
                >Logout</Link>
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

// export default Profile;
