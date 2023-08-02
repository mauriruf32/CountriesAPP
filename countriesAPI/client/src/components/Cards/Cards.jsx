import Card from "../Card/Card";
import style from  "./Cards.module.css";
// import  { useSelector } from "react-redux"

const Cards = ({countries}) =>{

    // const countries = useSelector(state=>state.countries)

    const countriesList = countries;

    return(
        <div className={style.container}>
            {countriesList?.map((country)=>(
            <Card country={country}/>
            ))}
        </div>
    )
}

export default Cards;