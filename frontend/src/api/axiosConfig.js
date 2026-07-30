import axios from "axios";

const API = axios.create({
    baseURL: "https://ticket-management-system-mlcm.onrender.com/api"
});

export default API;