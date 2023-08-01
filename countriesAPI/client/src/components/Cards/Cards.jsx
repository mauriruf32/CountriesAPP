import Card from "../Card/Card";
import style from  "./Cards.module.css";
import  { useSelector } from "react-redux"

const Cards = () =>{


    const countries = useSelector(state=>state.countries)

    return(
        <div className={style.container}>
            {countries.map(country=>{
                return <Card 
                id={country.id}
                name={country.name}
                flag={country.flag}
                continent={country.continent}
                />
            })}
        </div>
    )
}

export default Cards;