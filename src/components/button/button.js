import React from "react";
import "./button.css";

function button(props) {
    return (
        <React.Fragment>
            <button
                className={props.className}
                type={props.type}
                onClick={props.onClick}
            >
                {props.text}
            </button>
        </React.Fragment>
    )
}

export default button;