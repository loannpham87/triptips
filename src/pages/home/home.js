import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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
  state ={
    redirect: false,
    location: "/"
  }

  setRedirect = event => {
    this.setState({
      redirect: true,
      location: "/" + event.currentTarget.value
    });
  }

  renderRedirect = () => {
    console.log(this.state);
    if(this.state.redirect){
      return <Redirect to={this.state.location}/>
    }
  }

  // renderRedirect = (event) => {
  //   // var index = event.nativeEvent.target.selectedIndex;
  //   // console.log(index);
  //   console.log(event.currentTarget.textContent);
  // }

  handleClick = event => {
    console.log(event.currentTarget.value);
    let redirect = "/" + event.currentTarget.value;
    console.log(redirect);
    return <Redirect to="/login" />
  }
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
          {this.renderRedirect()}
          <div>
            {/* {this.renderRedirect()} */}
            <button className="btn" name="login" value="login" onClick={this.setRedirect}>Login</button>
          </div>
          <br />

          <div>
            {/* {this.renderRedirect()} */}
            {/* <button className="btn" name="signup" value="signup" onClick={((e) => this.renderRedirect(e, this.val))}>Sign Up</button> */}
            {/* <button className="btn" name="signup" value="profile" onClick={this.setRedirect}>Sign Up</button> */}
            {/* <button className="btn" name="signup" value="signup" onClick={() => {return <Redirect to="/login" />}}>Sign UP </button> */}
            <button className="btn" name="signup" value="signup">Sign Up</button>
          </div>
         
        </div>
  
      </React.Fragment>
    );
  }
}

export default Home;
