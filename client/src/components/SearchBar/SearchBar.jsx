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
      <input type="search" onChange={handleChange} placeholder="Search.." />
    </div>
  );
};

export default SearchBar;