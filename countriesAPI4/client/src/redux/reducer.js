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
                if(action.payload === 'A'){
                    return x.population - y.population;
                } else {
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