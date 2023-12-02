// NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
    return (
        <div className={style.container}>
            <Link to="/home">HOME</Link>
            <Link to="/create">FORM</Link>
            <Link to="/activities">ACTIVIDADES</Link>
            <Link to="/about">ABOUT</Link>
            <SearchBar />
        </div>
    );
};

export default NavBar;
