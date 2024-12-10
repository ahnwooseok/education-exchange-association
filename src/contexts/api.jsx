import axios from "axios";

const BACKEND_URL = "http://3.34.252.106:8080/";


export const BoardSearch = (postType, data) => {
    return axios.post(BACKEND_URL + `board/search/${postType}`, data, {
        withCredentials: true,
    });
}
export const AuthLoginPost = (data) => {
    return axios.post(BACKEND_URL + `auth/login`, data );
}
