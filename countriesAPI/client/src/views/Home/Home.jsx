import Cards from "../../components/Cards/Cards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUsers());
    },[dispatch])

    return (
        <>
            <h1>Esta es la Home</h1>
            <Cards />
        </>
    )
}

export default Home;