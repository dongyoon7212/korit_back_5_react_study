import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        Authorization: localStorage.getItem("AccessToken"),
    },
});

export default instance;
