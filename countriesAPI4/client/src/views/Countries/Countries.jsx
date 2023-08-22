import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountries } from "../../redux/actions";
import Card from "../../components/Card/Card";


const Countries = ({countries}) =>{

    // const countries = useSelector(state=>state.countries)

    const countriesList = countries;

    return(
        <div >
            {countriesList?.map((country)=>(
            <Card country={country}/>
            ))}
        </div>
    )
}

export default Countries;