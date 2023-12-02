import React from 'react';
import style from "./Landing.module.css";
import globo from "../../imagenes/globo2.gif";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.container}>
      <img src={globo} alt="Globo" />
      <div className={style.title}>
        <h1>Welcome to my Countries API</h1>
      </div>
      <button className={style.button}><Link to="/home">Ingresar</Link></button>
    </div>
  );
};

export default Landing;
