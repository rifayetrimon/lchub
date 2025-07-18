import axios from "axios";

const myAxios = axios.create({
  baseURL: "https://lchub-backend-s83j.vercel.app/",
  withCredentials: true,
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
