import { getCountryByName } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { countries } from "../../utils/dummyData";


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