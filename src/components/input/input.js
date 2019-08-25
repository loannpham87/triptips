import React from "react";
import "./input.css";

function input(props) {
    return (
        <React.Fragment>
            <input
                className={props.class}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
                style={{margin: "5px"}}
            />
        </React.Fragment>
    )

}

export default input;