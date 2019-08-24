import React, { Component } from "react";
import "./home.css";

// function Home() {
//   return (
//     <React.Fragment>
//       <div className="App">
//         <header className="main-header">
//           <img src="./../../images/transparent-bkg.png" className="logo" alt="logo" />
//           transparent-bkg.png
//         </header>
//       </div>

//       <div className="bkg">
//         <img
//           src="./../../images/initial-login-bkg-photo.jpg"
//           className="bkg-photo"
//           alt="background"
//         />
//       </div>

//       <div className="btn-container">
//         <button className="btn">
//           <a href="/login">Login</a>
//         </button>
//         <br />

//         <button className="btn">
//           <a href="/signup">Signup</a>
//         </button>
//       </div>

//     </React.Fragment>
//   );
// }

class Home extends Component{
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="main-header">
            <img src="./../../images/transparent-bkg.png" className="logo" alt="logo" />
            transparent-bkg.png
          </header>
        </div>
  
        <div className="bkg">
          <img
            src="./../../images/initial-login-bkg-photo.jpg"
            className="bkg-photo"
            alt="background"
          />
        </div>
  
        <div className="btn-container">
          <button className="btn">
            <a href="/login">Login</a>
          </button>
          <br />
  
          <button className="btn">
            <a href="/signup">Signup</a>
          </button>
        </div>
  
      </React.Fragment>
    );
  }
}

export default Home;
