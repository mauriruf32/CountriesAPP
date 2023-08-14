import React, { useState, useEffect } from 'react'; 
import style from "./Landing.module.css";
import { Link } from "react-router-dom";


const Landing = () => {
  const history = useState();

  const handleEnterClick = () => {
    history.push("/home")
  };

  useEffect(() => {
    document.body.classList.add(style.container);
  }, []);

  return (
    <div className={style.container}>
        <div className={style.title}>
        <h1>Mi nombre es Mauricio y sean bienvenidos a mi Countries API</h1>
        </div>
        <button className={style.button} onClick={handleEnterClick}><Link to="/home">Ingresar</Link></button>
    </div>
  );
};



export default Landing;