import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "./../../actions/authActions";
import { Link } from "react-router-dom";
import "./profile.css";
import Navbar from "../../components/NavBar/navbar";
import Header from "../../components/Header/header";
import { Container } from "semantic-ui-react";
// import 'semantic-ui-css/semantic.min.css';




class Profile extends Component {
  constructor() {
    super();
    this.state = {
      uploads: []
    }
  }

  componentDidMount() {
    console.log(this.props.auth.user);

    axios.get("/api/posts/uploads/" + this.props.auth.user.id)
      .then(res => {
        this.setState({ uploads: res.data });
        // console.log(res.data);
        console.log(this.state.uploads);
      })
      .catch(err => console.log(err));
  }

  onLogoutClick = event => {
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
        <Header />
        <Navbar />

        <Container >

          {/* <div>
                <h1>{user.name}</h1>
              </div> */}

          <button
            onClick={this.onLogoutClick}
          >Logout</button>

          <Link to="/upload" className="btn-flat waves-effect">
            Upload
            </Link>
          {this.state.uploads.map(function (pic, i) {
            return (
              <div key={pic.id} id={pic.userId} className="card" style={{margin: "25px", width: "700px", height: "100%" }}>
                <h2 className="title" style={{ fontSize: "50px" }}>{pic.title}</h2>
                <img src={pic.picUrl} style={{ width: "500px", height: "400px", paddingLeft: "125px" }} alt="user photo" />
                <p className="caption" style={{ margin: "50px" }}>{pic.caption}</p>
              </div>
            )
          })}
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