import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCountries, getCountries, orderCountries } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";
import SearchBar from "../../components/SearchBar/SearchBar";
// import SelectBox from "../../components/SelectBox/SelectBox";

const Home = () => {
    const dispatch = useDispatch();
    const countries =  useSelector((state) => state.countries);
    const [filtered, setFiltered] = useState([...countries]);
    const [searchString, setSearchString] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchString(e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const filtered = countries.filter((country)=>
        country.name.includes(searchString));
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

    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch]);

    return (
        <div>
          <div>
            <h2>Esta es la Home</h2>
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
            {/* <SelectBox/> */}
            <select name="order" onChange={handleOrder} >
             <option value="A">Ascendent</option>
             <option value="D">Descendent</option>
            </select>
            <select name="filter" onChange={handleFilter} >
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

