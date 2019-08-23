
    import React, { Component } from "react";

    import "./post.css";


    class Post extends Component {
      render() {
        return <article className="Post" ref="Post">
            <header>
              <div className="Post-user">
                <div className="Post-user-avatar">
                  <img src="https://i.imgur.com/44Z37E8.jpg" alt="amandaLuane" />
                  {/* <img src="https://www.laravelnigeria.com/img/chris.jpg" alt="Chris" /> */}
                </div>
                <div className="Post-user-nickname">
                  <span>AmandaLuane</span>
                </div>
              </div>
            </header>
            <div className="Post-image">
              <div className="Post-image-bg">
                {/* <img alt="Icon Living" src="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" /> */}
                <img alt="Icon Living" src="https://i.imgur.com/9HFge0U.jpg" />
              </div>
            </div>
            <div className="Post-caption">
              <strong>AmandaLuane</strong> Mount Tolmie
            </div>
          </article>;
        }
    }
    export default Post;
