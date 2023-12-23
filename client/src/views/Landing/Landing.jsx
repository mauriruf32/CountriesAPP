import React from 'react';
import style from "./Landing.module.css";
import globo from "../../imagenes/globo2.gif";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.container}>
      <img src={globo} alt="Globo" />
      <div className={style.title}>
        <h1>Welcome to my Countries App</h1>
      </div>
      <Link to="/home"><button className={style.button}>Explore</button></Link>
    </div>
  );
};

export default Landing;
