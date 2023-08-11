import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";
export const ORDER = "ORDER";
export const FILTER = "FILTER";

export function getCountries(){
    return async function(dispatch){
        const response = await axios.get('http://localhost:3001/countries');
        return dispatch ({
            type: "GET_COUNTRIES",
            payload: response.data
        });
    };
}

export function getCountryById(id){
    return async function (dispatch) {
        const response = await axios.get(
            `http://localhost:3001/countries/${id}`
        );
        return dispatch({
            type: "GET_COUNTRY_BY_ID", 
            payload: response.data
        });
    };
}

export function orderCountries(value) {
  return {
    type: "ORDER",
    payload: value,
  };
};

export function filterCountries(continents) {
    return {
      type: "FILTER",
      payload: continents,
    };
  };