import React from "react";
import "./form.css";

function form(props) {
    return (
        <React.Fragment>
            <form>
                <div className="form-group">
                    {props.children}
                </div>
            </form>
        </React.Fragment>
    )
}

export default form;