import React, {Component} from "react";
// import "./posts.css";
// import gql from "graphql-tag";
// import Post from "../Post/post";
import PropTypes from "prop-types";
// import Notifier from "../Notifier/notifier";
import { Container, Item, Image, Button, Header, Grid, Card } from 'semantic-ui-react';
import * as photoActions from '../../actions/photo';
import * as userActions from '..//..//actions/users';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import Navbar from '..//..//components/NavBar/navbar';
// import Header from '..//..//components/Header/header';

// const { user } = this.props.auth;



class Post extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.submitImage = this.submitImage.bind(this);
    }

    componentWillMount() {
        this.props.userActions.fetchUser();
        this.props.photoActions.fetchPhotos();
    }

    submitImage(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', this.state.file);
        if (this.props.user) {
            this.props.photoActions.uploadPhoto(formData, this.props.user);
        }
    }

    // renderPhotos() {
    //     // <Header/>
    //     // <Navbar/>
    //     // if (this.props.photos && this.props.user.name) {
    //         return this.props.photos.map(photo =>
    //             <Grid.Column key={photo._id}>
    //                 <Card>
    //                     <Image style={{ height: '300px', width: '300px' }} src={photo.imageUrl} />
    //                     <Card.Content>
    //                         <Card.Header>
    //                             {this.props.user.username}
    //                         </Card.Header>
    //                         <Card.Description>
    //                             {photo.caption}
    //                         </Card.Description>
    //                     </Card.Content>
    //                     <Card.Content extra>
    //                         <div className='ui two buttons'>
    //                             <Button>Edit</Button>
    //                             <Button onClick={() => this.props.photoActions.deletePhoto(photo.image_id)}>Delete</Button>
    //                         </div>
    //                     </Card.Content>
    //                 </Card>
    //             </Grid.Column>
    //         )
    //     // }
    // }

    renderUserCard() {
        // const { user } = this.props.auth;
        // console.log(user);
    
        // if (this.props.user) {
            return <Item>
                <Item.Image src={this.props.user.profilePic} />
                <Item.Content>
                    <Item.Header>
                        <Header as='h1'>{this.props.user}</Header>
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
                    {/* <Item.Meta>
                        <span as='h2'>{this.props.user.followers.length} Followers</span>
                        <span as='h2'>{this.props.user.following.length} Following</span>
                    </Item.Meta> */}
                    <Item.Description>
                        A description which may flow for several lines and give context to the content.
                </Item.Description>
                </Item.Content>
            </Item>
        // }
    }

    onChange(e) {
        this.setState({ file: e.target.files[0] });
    }


    render() {
        return (
            // <p>this.props.user</p>
            <div>
                <Container>
                    <Item.Group divided>
                        {this.renderUserCard()}
                    </Item.Group>
                </Container>
                <Container>
                    <Grid columns={3} doubling stackable>
                        {/* {this.renderPhotos()} */}
                    </Grid>
                </Container>
            </div >
        )
    }
}
  
//   const mapStateToProps = state => ({
//     auth: state.auth
//   });

Post.propTypes = {
    auth: PropTypes.object.isRequired
  };
  

function mapStateToProps(state) {
    return {
        // user: state.user.user,
        user: state.auth,
        photos: state.photos.photos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        photoActions: bindActionCreators(photoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);