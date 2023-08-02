import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
    const dispatch = useDispatch();
    const countries =  useSelector((state) => state.countries);
    const [filtered, setFiltered] = useState(countries);
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

    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch]);

    return (
        <div>
            <h2>Esta es la Home</h2>
            <NavBar handleChange={handleChange} handleSubmit={handleSubmit} />
            <Cards countries={filtered}/>          
        </div>
    );
}

export default Home;