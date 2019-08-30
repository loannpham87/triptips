import React, { Component } from "react";
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
  
  render() {
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
                TEST
                {/* {props.location.key} */}
              </div>
              {/* <div>
                <Post/>
              </div> */}
            </div>
      
            <div>
              <Post />
            </div>
          </React.Fragment>
        );
  }
}

export default Profile;
