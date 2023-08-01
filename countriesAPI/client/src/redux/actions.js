import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";

export const getCountries = () => {
    return async function (dispatch) {
        const apiData = await axios.get(
            'http://localhost:3001/countries'
        );
        const countries = apiData.data;
        dispatch({type: GET_COUNTRIES, payload: countries});
    };
};

export const getCountry = (name) => {
    return async function (dispatch) {
        const apiData = await axios.get(
            `http://localhost:3001/countries?name=` + name
            
        );
        const country = apiData.data;
        dispatch({type: "GET_COUNTRY", payload: country});
    };
};

