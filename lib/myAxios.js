import axios from "axios";

const myAxios = axios.create({
  baseURL: process.env.VUE_APP_API_URL || "http://localhost:3000", // temporary url
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

myAxios.interceptors.request.use(
  (config) => {
    // Add any request modifications here if needed
    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

export default myAxios;
