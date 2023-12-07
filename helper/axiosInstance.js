import axios from "axios";
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export async function get(url, config = {}) {
  return await axiosInstance
    .get(url, { ...config })
    .then((response) => response.data);
}
export async function post(url, data, config = {}) {
  return axiosInstance
    .post(url, { ...data }, { ...config })
    .then((response) => {
      return response.data;
    });
}

export async function put(url, data, config = {}) {
  return axiosInstance
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function patch(url, data, config = {}) {
  return axiosInstance
    .patch(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function del(url, config = {}) {
  return await axiosInstance
    .delete(url, { ...config })
    .then((response) => response.data);
}
export default axiosInstance;
