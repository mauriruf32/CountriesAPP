


const SearchBar = ({handleChange, handleSubmit}) => {

  return (
    <div>
            <form onChange={handleChange}>
            <input placeholder="Busqueda" />
            <button type= "submit" onClick={handleSubmit}>Buscar</button>
            </form>
    </div>
  );
};

export default SearchBar;


