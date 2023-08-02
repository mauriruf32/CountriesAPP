import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/NavBar/NavBar"
// import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch();
    

    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch])

    return (
        <>
         <NavBar />
            <h1>Esta es la Home</h1>
            <Cards />
           
          
        </>
    )
}

export default Home;