import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import browserStorage from "../storage/browserStorage";

const token = browserStorage.get<string | undefined>("token");

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 15000,
  headers: {
    token: `${token}`,
  },
};

axios.interceptors.request.use(
  (config) => {
    return {
      baseURL: process.env.REACT_APP_BASE_URL,
      ...config,
      timeout: 31000,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const axiosInstance: AxiosInstance = axios.create(config);

export default axios;
