import { useState } from "react";

import { getCountryByName } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";


const SearchBar = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(getCountryByName(e.target.value));
  };

  return (
    <div >
      <input type="search" onChange={handleChange} placeholder="Buscar paises.." />
    </div>
  );
};

export default SearchBar;


// const SearchBar = ({handleChange, handleSubmit}) => {

//   return (
//     <div>
//             <form onChange={handleChange}>
//             <input placeholder="Busqueda" />
//             <button type= "submit" onClick={handleSubmit}>Buscar</button>
//             </form>
//     </div>
//   );
// };

// export default SearchBar;


