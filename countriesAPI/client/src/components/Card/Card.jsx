import style from "./Card.module.css";
import { useState } from "react";
const Card = (props) =>{

    
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
        <img className={style.cardImage} src={props.flag} alt="Bandera:" />
        {/* <img>Bandera:{props.flag} alt=""</img> */}
         <p className={style.name}>Nombre:{props.name}</p>
        <p className={style.detail}>Continente:{props.continent}</p>
        </div>
    )
}


export default Card;