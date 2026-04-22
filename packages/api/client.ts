import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

api.interceptors.request.use((config) => {
  // token ekleme vs
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    // global error handling
    return Promise.reject(err);
  },
);
