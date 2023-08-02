import { GET_COUNTRIES, GET_COUNTRY_BY_ID } from "./actions";

const initialState = {
    countries: [],
    countriesCopy: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return { ...state, 
                countries: action.payload,
                countriesCopy: action.payload,
            };
        case GET_COUNTRY_BY_ID:
            return { ...state, 
                countries: action.payload, 
            };
        default:
            return {
                ...state
            };
    }
};

export default rootReducer;