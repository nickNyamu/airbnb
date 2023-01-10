import React from "react";
import logo from "../airbnb-logo.svg";

export default function Navbar() {
    return(
        <nav>
            <img src={logo} alt="airbnb logo"/>
        </nav>
    );
}