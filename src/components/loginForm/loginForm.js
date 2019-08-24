import React, { Component } from "react";
import "./loginForm.css";

class loginForm extends Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = event => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        // event.preventDefault();
        console.log("Username " + this.state.username);
        console.log("Password " + this.state.password);
    }

    render() {
        return(
            <React.Fragment>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" name="username" placeholder="username" onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" name="password" placeholder="password" onChange={this.handleChange}/>
                    </div>
                </form>

                <button className="login-btn" onClick={this.handleSubmit}>Login</button>
            </React.Fragment>
        )
    }
}

export default loginForm;