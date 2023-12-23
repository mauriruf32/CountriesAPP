import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCountries, getCountries, orderCountriesByName, getActivities, filterCountriesByActivity } from "../../redux/actions";
import style from "./Home.module.css";
import Cards from "../../components/Cards/Cards";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
    const dispatch = useDispatch();
    const [order, setOrder] = useState(false);
    const countries =  useSelector((state) => state.countries);
    const activities = useSelector((state) => state.activities);

    const resetFilters = () => {
      dispatch(getCountries()); 
    };

    const handleOrder = function(evento){
      dispatch(orderCountriesByName(evento.target.value))
      if (!order) setOrder(true);
      else setOrder (false);
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
      dispatch(getCountries());
      dispatch(getActivities());
    }, [dispatch]);


    return (
        <div className={style.container}>
            <h2 className={style.title}>Here you can search for the countries you want. Let's do it:</h2>
             <SearchBar />
            <select name="order" onChange={handleOrder} className={style.select} >
             <option value="alphabetA">Names (A-Z)</option>
             <option value="alphabetZ">Names (Z-A)</option>
             <option value="higherPopulation">Higher population</option>
             <option value="lowerPopulation">Lower population</option>
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
            <button onClick={resetFilters} className={style.resetButton}>    
Reset Filters
        </button>
            <Cards countries={countries}/>          
        </div>
    );
}

export default Home;

