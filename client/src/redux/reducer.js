import { FILTER, GET_COUNTRIES, GET_COUNTRY_BY_ID, 
    POST_ACTIVITY, GET_ACTIVITIES, GET_COUNTRY_BY_NAME, FILTER_BY_ACTIVITY, ORDER_BY_NAME} from "./actions";

const initialState = {
    countries: [],
    continentFilter: [],
    activities: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return { ...state, 
            countries: action.payload,
            continentFilter: action.payload
            };

        case GET_COUNTRY_BY_ID:
            return { ...state, 
                countries: action.payload, 
            };

        case GET_COUNTRY_BY_NAME:
            return { ...state, 
                    countries: action.payload, 
                };
                
        case ORDER_BY_NAME:
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

        case FILTER:
            const porContinente = state.countries.filter((country) => action.payload.includes(country.continent))
            return {
                 ...state,
                countries: porContinente,
            };

        case FILTER_BY_ACTIVITY:
            const activityFilter = 
            action.payload !== 'all' 
            ? state.activities.filter(activity => activity.name === action.payload) 
            : state.activities 

      let paises= activityFilter[0].countries;

      let countriesAct =
            activityFilter=== state.activities
            ? state.countries
            : state.countries.filter(countryA => paises.includes(countryA.id)) 
                
        return { ...state, countries: countriesAct };

        case POST_ACTIVITY:{
            return {
                ...state,
                activities: [...state.activities, action.payload]
                }
            }

        case GET_ACTIVITIES:{
            return {
                    ...state,
                    activities: action.payload
                }
              }


        default:
            return state;
    }
};

export default rootReducer;