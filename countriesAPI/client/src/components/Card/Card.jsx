import style from "./Card.module.css";

const Card = (props) =>{
    return(
        <div className={style.card}>
        <img className={style.cardImage} src={props.flag} alt="Bandera:" />
        {/* <img>Bandera:{props.flag} alt=""</img> */}
         <p>Nombre:{props.name}</p>
        <p>Continente:{props.continent}</p>
        </div>
    )
}


export default Card;