import React, { useState, useEffect } from 'react'; 
import styles from "./Landing.module.css";
import { Link } from "react-router-dom";


const Landing = () => {
  const history = useState();

  const handleEnterClick = () => {
    history.push("/home")
  };

  useEffect(() => {
    document.body.classList.add(styles.container);
  }, []);

  return (
    <div className={styles.conteiner}>
        <div className={styles.title}>
        <h1>Bienvenidos a mi Countries API</h1>
        </div>
        <button className={styles.boton} onClick={handleEnterClick}><Link to="/home">Ingresar</Link></button>
    </div>
  );
};



export default Landing;