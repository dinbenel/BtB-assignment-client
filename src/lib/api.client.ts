import { config } from "@/config";
import axios from "axios";

export const axiosClient = axios.create({
  baseURL: config.baseUrl,
  timeout: config.timeout,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(function (config) {
  // if (token) {
  //   config.headers.Authorization = 'Bearer ' + token;
  // }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // all error codes use cases
    if (!error || (error.response && error.response.status === 401)) {
    }
    return Promise.reject(error);
  }
);
