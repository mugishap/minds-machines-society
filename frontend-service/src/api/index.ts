import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.DEV
        ? "http://localhost:5000/api/v1"
        : "https://minds-machines-society.onrender.com/api/v1"
})