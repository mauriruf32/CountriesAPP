import Cards from "../../components/Cards/Cards";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";

const Home = () => {
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch])

    return (
        <>
            <h1>Esta es la Home</h1>
            <SearchBar />
            <Cards />
        </>
    )
}

export default Home;