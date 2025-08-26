import { message } from "antd";
import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + import.meta.env.VITE_PATH,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const temp = config;
    const access = Cookies.get("token");
    if (access) {
      temp.headers.Authorization = `Bearer ${access}`;
    }
    return temp;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.config.url === "/client/verify" && !response.data.status) {
      message.error(response.data.message);
      throw Error(response.data.message);
    }
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
