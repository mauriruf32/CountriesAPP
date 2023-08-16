import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";
export const ORDER = "ORDER";
export const FILTER = "FILTER";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const GET_ACTIVITIES = "GET_ACTIVITIES";

export function getCountries(){
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/countries`);
         dispatch ({
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
         dispatch({
            type: "GET_COUNTRY_BY_ID", 
            payload: response.data
        });
    };
}

export function getCountryByName(name){
    return async function (dispatch){
        const response = await axios.get(
            `http://localhost:3001/countries/?name=${name}`
        );
         dispatch({
            type: "GET_COUNTRY_BY_NAME",
            payload: response.data
        });
    };
}

export function getActivities(){
    return async function (dispatch){
        const response = await axios.get(
            `http://localhost:3001/activities`
        );
        return dispatch({
            type: "GET_ACTIVITIES",
            payload: response.data
        });
    };
}

export function postActivity(data){
    return async function (dispatch){
            const response = await axios.post('http://localhost:3001/activities/', data)
            return dispatch({
                type: "POST_ACTIVITIY",
                payload: response.data
            })
        }
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