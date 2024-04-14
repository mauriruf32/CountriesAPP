import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const FILTER = "FILTER";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const GET_ACTIVITIES = "GET_ACTIVITIES";

const URL = process.env.URL || 'http://localhost:3001';


export function getCountries(){
    return async function(dispatch){
        const response = await axios.get(`${URL}/countries`);
         dispatch ({
            type: "GET_COUNTRIES",
            payload: response.data
        });
    };
}

export function getCountryById(id){
    return async function (dispatch) {
        const response = await axios.get(
            `${URL}/countries/${id}`
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
            `${URL}/countries/?name=${name}`
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
            `${URL}/activities`
        );
        return dispatch({
            type: "GET_ACTIVITIES",
            payload: response.data
        });
    };
}

export function postActivity(data){
    return async function (dispatch){
            const response = await axios.post(`${URL}/activities/`, data)
            return dispatch({
                type: "POST_ACTIVITIY",
                payload: response.data
            })
        }
    }    

export function filterCountriesByActivity(activities) {
    return{
        type: "FILTER_BY_ACTIVITY",
        payload: activities,
    };
};

export function orderCountriesByName(order) {
    return {
      type: "ORDER_BY_NAME",
      payload: order
    };
  };
  
  export function filterCountries(continents) {
      return {
        type: "FILTER",
        payload: continents,
      };
    };