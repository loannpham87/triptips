import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { uploadPost } from "./../../actions/postAction";

class Upload extends Component {
    constructor() {
        super();
        this.state = {
            userId: "",
            title: "",
            userName: "",
            picUrl: "",
            caption: ""
        };
    }

    componentDidMount() {
        console.log(this.props.auth.user);
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const postData = {
            userId: this.props.auth.user.id,
            title: this.state.title,
            userName: this.props.auth.user.name,
            picUrl: this.state.picUrl,
            caption: this.state.caption
        };

        console.log(postData);
        this.props.uploadPost(postData, this.props.history);
    }

    render() {
        return(
        <div className="container">
            <div className="row">
                <div className="col s8 offset-s2">
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.state.title}
                                id="title"
                                type="text"
                                className="title"
                            />
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.state.picUrl}
                                id="picUrl"
                                type="text"
                                className="picUrl"
                            />
                            <label htmlFor="picUrl">Picture URL</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.state.caption}
                                id="caption"
                                type="text"
                                className="caption"
                            />
                            <label htmlFor="caption">Caption</label>
                        </div>
                        <div className="col s12">
                            <button
                                type="submit"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}
Upload.propTypes = {
    auth: PropTypes.object.isRequired,
    uploadPost: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { uploadPost }
    // mapStateToProps
)(Upload);