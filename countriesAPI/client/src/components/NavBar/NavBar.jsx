import { Link } from "react-router-dom"


const NavBar = ({handleChange, handleSubmit}) => {
    
    return(
        <div>
            <form onChange={handleChange}>
            <input placeholder="Busqueda" />
            <button type= "submit" onClick={handleSubmit}>Buscar</button>
            </form>
            <Link to="/home">HOME</Link>
            <Link to="/create">FORM</Link>
        </div>
    );
}

export default NavBar;