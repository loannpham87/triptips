import React, { Component } from "react";
import Form from "./../../components/form/form";
import Input from "./../../components/input/input";
import Button from "./../../components/button/button";
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
                <Form>
                    <Input type="text" className="form-control" name="username" placeholder="username" onChange={this.handleChange}/>
                    <Input type="password" className="form-control" name="password" placeholder="password" onChange={this.handleChange}/>
                </Form>
                <Button className="login-btn" onClick={this.handleSubmit} text="Login"/>
            </React.Fragment>
        )
    }
}

export default loginForm;