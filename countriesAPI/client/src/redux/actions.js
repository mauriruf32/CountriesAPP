import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";

export function getCountries(){
    return async function(dispatch){
        const response = await axios.get('http://localhost:3001/countries');
        return dispatch ({
            type: "GET_COUNTRIES",
            payload: response.data
        })
    }
}

export const getCountryById = (id) => {
    return async function (dispatch) {
        const response = await axios.get(
            `http://localhost:3001/countries/${id}`
        );
        dispatch({type: "GET_COUNTRY_BY_ID", payload: response.data});
    };
};

