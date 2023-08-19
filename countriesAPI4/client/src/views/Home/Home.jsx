import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCountries, getCountries, orderCountries, getActivities, filterCountriesByActivity } from "../../redux/actions";
import style from "./Home.module.css";
import Cards from "../../components/Cards/Cards";
import SearchBar from "../../components/SearchBar/SearchBar";


const Home = () => {
    const dispatch = useDispatch();
    const countries =  useSelector((state) => state.countries);
    const activities = useSelector((state) => state.activities);
    const [filtered, setFiltered] = useState(countries);
    const [searchString, setSearchString] = useState("");

    useEffect(()=>{
      dispatch(getCountries());
  },[dispatch]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchString(e.target.value.toLowerCase());
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const filtered = countries.filter((country)=>
        country.name.toLowerCase().includes(searchString));
        setFiltered(filtered);
    };

    const handleOrder = function(evento){
      evento.preventDefault();
      dispatch(orderCountries(evento.target.value))
    }

    const handleFilter = function(evento){
      evento.preventDefault();
      dispatch(filterCountries(evento.target.value))
    }

    const handleFilterActivity = function(evento){
      evento.preventDefault();
      dispatch(filterCountriesByActivity(evento.target.value))
    }

    useEffect(() => {
      dispatch(getActivities());
    }, []);



    return (
        <div>
          <div>
            <h2 className={style.title}>Aqui puedes buscar los paises que quieras... hagamoslo:</h2>
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
            <select name="order" onChange={handleOrder} className={style.select} >
             <option value="alphabetA">Nombres (A-Z)</option>
             <option value="alphabetZ">Nombres (Z-A)</option>
             <option value="higherPopulation">Mayor Población</option>
             <option value="lowerPopulation">Menor Población</option>
            </select>
            <select name="activity" onChange={handleFilterActivity} className={style.select} >
            <option value="all">All</option>
            {activities.map((actividad) => {
                    return (<option key={actividad.id} value={actividad.name}> {actividad.name} </option> );
                  })}
            </select>
            <select name="filter" onChange={handleFilter} className={style.select} >
              <option value="All">All</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Africa">Africa</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Oceania">Oceania</option>
            </select>
            </div>
            <Cards countries={filtered}/>          
        </div>
    );
}

export default Home;

