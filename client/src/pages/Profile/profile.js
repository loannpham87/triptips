import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { bindActionCreators } from 'redux';


import "./profile.css";
import  { logoutUser } from "./../../actions/authActions";
import * as photoActions from '../../actions/photo';
import * as userActions from '../../actions/users';
// import Post from "../../components/Post/post";
// import { Container, Item, Image, Button, Icon, Label, Header, Grid, Segment, Card } from 'semantic-ui-react';
import { Container, Item, Image, Button, Header, Grid, Card } from 'semantic-ui-react';


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

    this.props.logoutUser(this.props.history);
    console.log("logged out");

  }

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.submitImage = this.submitImage.bind(this);
}

componentWillMount() {
    // this.props.userActions.fetchUser();
    // this.props.photoActions.fetchPhotos();
}

submitImage(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', this.state.file);
    if (this.props.user) {
        this.props.photoActions.uploadPhoto(formData, this.props.user);
    }
}

renderPhotos() {
    if (this.props.photos && this.props.user) {
        return this.props.photos.map(photo =>
            <Grid.Column key={photo._id}>
                <Card>
                    <Image style={{ height: '300px', width: '300px' }} src={photo.imageUrl} />
                    <Card.Content>
                        <Card.Header>
                            {this.props.user.username}
                        </Card.Header>
                        <Card.Description>
                            {photo.caption}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button>Edit</Button>
                            <Button onClick={() => this.props.photoActions.deletePhoto(photo.image_id)}>Delete</Button>
                        </div>
                    </Card.Content>
                </Card>
            </Grid.Column>
        )
    }
}

renderUserCard() {
    if (this.props.user) {
        return <Item>
            <Item.Image src={this.props.user.profilePic} />
            <Item.Content>
                <Item.Header>
                    <Header as='h1'>{this.props.user.username}</Header>
                    <Button color='black'>
                        <Header as='h4' style={{ color: 'white' }}>Edit Profile</Header>
                    </Button>
                    <Button color='black'>
                        <Header as='h4' style={{ color: 'white' }}>Upload Avatar</Header>
                    </Button>
                    <form onSubmit={this.submitImage} encType="multipart/form-data">
                        <input type="file" name="profile" onChange={this.onChange}/>
                        <Button type="submit">Upload Picture</Button>
                    </form>
                </Item.Header>
                <Item.Meta>
                    <span as='h2'>{this.props.user.followers.length} Followers</span>
                    <span as='h2'>{this.props.user.following.length} Following</span>
                </Item.Meta>
                <Item.Description>
                    A description which may flow for several lines and give context to the content.
            </Item.Description>
            </Item.Content>
        </Item>
    }
}

onChange(e) {
    this.setState({ file: e.target.files[0] });
}

  
  // render() {
  //   // const { user } = this.props.auth;
  //   // console.log(user);
  //   return (
  //         <React.Fragment>
  //           <div className="App">
  //             <header className="main-header">
  //               <img
  //                 src="./../../images/transparent-bkg.png"
  //                 className="logo"
  //                 alt="logo"
  //               />
  //             </header>
  //             <div>
  //               {/* <h1>{user.name}</h1> */}
  //             </div>
  //           </div>
      
  //           <div>
  //             <Post />
  //           </div>

  //           <button
  //             onClick={this.onLogoutClick}
  //             >Logout</button>
  //         </React.Fragment>
  //       );
  // }

  render() {
    // const { user } = this.props.auth;
    // console.log(user);
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
            </div>    

            <div>
                <Container>
                    <Item.Group divided>
                        {this.renderUserCard()}
                    </Item.Group>
                </Container>
                <Container>
                    <Grid columns={3} doubling stackable>
                        {this.renderPhotos()}
                    </Grid>
                </Container>
            </div >

          <button
            onClick={this.onLogoutClick}
          >Logout</button>


          </React.Fragment>
        );
  }



}

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user,
  photos: state.photos
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch),
  photoActions: bindActionCreators(photoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps, logoutUser)(Profile);
