import style from "./Card.module.css";
import { useState } from "react";



const Card = ({country}) =>{

  const {flag, name, continent} = country;
    
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
        <img className={style.cardImage} src={flag} alt="Bandera:" />
        {/* <img>Bandera:{props.flag} alt=""</img> */}
         <p className={style.name}>Nombre:{name}</p>
        <p className={style.detail}>Continente:{continent}</p>
        </div>
    )
}


export default Card;