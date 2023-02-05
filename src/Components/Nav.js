import React from "react";
import "./Nav.css"

function Nav(props) {
    return (
        <div className="nav">{props.name}</div>
    )
}

export default Nav;