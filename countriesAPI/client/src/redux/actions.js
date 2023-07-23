import axios from "axios";

export const GET_USERS = "GET_USERS";

export const getUsers = () => {
    return async function (dispatch) {
        const apiData = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = apiData.data;
        dispatch({type: GET_USERS, payload: users});
    };
};

export const getUser = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const user = apiData.data;
        dispatch({type: "GET_USER", payload: user});
    };
};

