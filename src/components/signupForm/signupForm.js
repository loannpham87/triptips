import React, { Component } from "react";
import "./signupForm.css";

class signUpForm extends Component {
    render(){
        return(
            <React.Fragment>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="First Name"/>
                        <input type="text" className="form-control" placeholder="Last Name"/>
                        <input type="text" className="form-control" placeholder="Email Address"/>
                        <input type="text" className="form-control" placeholder="Username"/>
                        <input type="password" className="form-control" placeholder="Password"/>
                        <input type="password" className="form-control" placeholder="Confrim Password"/>
                    </div>
                </form>

                <button className="signup-btn">Sign-Up</button>
            </React.Fragment>
        )
    }
}

export default signUpForm;