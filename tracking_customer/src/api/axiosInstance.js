import axios from "axios";

const defaultBaseURL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8001";
const authBaseURL = import.meta.env.VITE_AUTH_API_URL || defaultBaseURL;
const productBaseURL = import.meta.env.VITE_PRODUCT_API_URL || "http://127.0.0.1:8002";
const orderBaseURL = import.meta.env.VITE_ORDER_API_URL || "http://127.0.0.1:8003";
const trackingBaseURL = import.meta.env.VITE_TRACKING_API_URL || "http://127.0.0.1:8004";
const userBaseURL = import.meta.env.VITE_USER_API_URL || authBaseURL;

const createAxiosInstance = (baseURL) =>
  axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

const withInterceptors = (instance) => {
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) {
        localStorage.removeItem("token");
      }
      return Promise.reject(error);
    },
  );

  return instance;
};

export const authAxiosInstance = withInterceptors(createAxiosInstance(authBaseURL));
export const productAxiosInstance = withInterceptors(createAxiosInstance(productBaseURL));
export const orderAxiosInstance = withInterceptors(createAxiosInstance(orderBaseURL));
export const trackingAxiosInstance = withInterceptors(createAxiosInstance(trackingBaseURL));
export const userAxiosInstance = withInterceptors(createAxiosInstance(userBaseURL));

export default authAxiosInstance;
