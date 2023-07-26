import Card from "../Card/Card";
import  { useSelector } from "react-redux"

const Cards = () =>{


    const countries = useSelector(state=>state.countries)

    return(
        <div>
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