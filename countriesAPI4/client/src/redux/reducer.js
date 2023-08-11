import { FILTER, GET_COUNTRIES, GET_COUNTRY_BY_ID, ORDER} from "./actions";

const initialState = {
    countries: [],
    continentFilter: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return { ...state, 
                countries: action.payload,
                continentFilter:action.payload
            };
        case GET_COUNTRY_BY_ID:
            return { ...state, 
                countries: action.payload, 
            };
        case FILTER:
            const filtered = state.countries.filter(country => country.continent === action.payload)
            return {
                 ...state,
                countries: action.payload === 'All' ? state.countries : filtered,
            }; 

        case ORDER:
            const orderCountries = state.countries.sort((x,y) => {
                switch (action.payload){
                    case "alphabetA":
                        return x.name.localeCompare(y.name);
                    case "alphabetZ":
                        return y.name.localeCompare(x.name);
                    case "lowerPopulation":
                        return x.population - y.population;
                    case "higherPopulation":
                        return y.population - x.population;
                }
            })
            return {
                  ...state,
                  countries: orderCountries,
                };
        default:
            return {
                ...state
            };
    }
};

export default rootReducer;