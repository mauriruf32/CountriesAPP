import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { useState } from "react";

const Card = ({country}) =>{

  const {flag, name, continent, population, id} = country;
    
  const [isHidden, setIsHidden] = useState(false);

  const onClose = () => {
    setIsHidden(true);
  };

  if (isHidden) {
    return null;
  }

    return(
        <div className={style.card}>
        <button className={style.card_close} onClick={onClose}>X</button>
        <Link to={`detail/${id}`}>
        <img className={style.cardImage} src={flag} alt="Bandera:" />
         <p className={style.name}>Name: {name}</p>
        <p className={style.details}>Continent: {continent}</p>
        <p className={style.details}>Population: {population}</p>
        </Link>
        </div>
    );
}


export default Card;