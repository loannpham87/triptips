import React from "react";
import "./posts.css";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Post from "../Post";


class Posts extends Component{
  constructor(){
    super();
    this.state = {
      posts : []
    };
  }
  this.props.apollo_client
  .query({ 
    query:gql`
      {
        posts(user_id: "a"){
          id
          user{
            nickname
            avatar
          }
          image
          caption
        }
      } 
    `})
  .then(response => {
    this.setState({ posts: response.data.posts});
  });
//fetching the existing posts from server then posts
  componentDidMount(){
    // fetch the initial posts 
    this.props.apollo_client
      .query({ 
        query:gql`
          {
            posts(user_id: "a"){
              id
              user{
                nickname
                avatar
              }
              image
              caption
            }
          } 
        `})
      .then(response => {
        this.setState({ posts: response.data.posts});
      });


      
          //  subscribe to posts channel
          this.posts_channel = this.props.pusher.subscribe('posts-channel');
          // listen for a new post
                  this.posts_channel.bind("new-post", data => {
                      this.setState({ posts: this.state.posts.concat(data.post) });
                    }, this);
                }
    //map the posts to the post component
                render(){
                  return (
                    <div className="Posts">
                      {this.state.posts.map(post => <Post nickname={post.user.nickname} avatar={post.user.avatar} image={post.image} caption={post.caption} key={post.id}/>)}
                    </div>
                  );
                }
              }    

    export default Posts;


  //   const Posts = () => {
  //     return (
  //       <Query
  //         query={gql`
  //           {
  //             posts(user_id: "a"){
  //               id
  //               user{
  //                 nickname
  //                 avatar
  //               }
  //               image
  //               caption
  //             }
  //           }
  //         `}>
  //         {({loading, error, data}) => {
  //             if (loading) return <p>Loading Posts...</p>;
  //             if (error) return <p>Error Fetching Posts...</p>;
  //             let posts = data.posts;
  // return <div className="Posts">
  //               {posts.map(post => <Post nickname={post.user.nickname} avatar={post.user.avatar} image={post.image} caption={post.caption} key={post.id}/>)}
  //             </div>;
  //           }}
  //         </Query>
  //       );
  //     }
  