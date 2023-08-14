import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div>
            <Link to="/home">HOME</Link>
            <Link to="/create">FORM</Link>
            <Link to="/activities">ACTIVIDADES</Link>
            <Link to="/about">ABOUT</Link>
        </div>
    )
}

export default NavBar;