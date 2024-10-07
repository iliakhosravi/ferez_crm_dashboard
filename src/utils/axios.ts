import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.ferez.net/api/service/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const temp = config;
    const access = localStorage.getItem("access_token");
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
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
