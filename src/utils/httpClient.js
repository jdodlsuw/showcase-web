import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'https://showcase-server.vercel.app', // Đọc từ biến môi trường
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptors: Xử lý request và response
httpClient.interceptors.request.use((config) => {
  // const token = localStorage.getItem("token"); // Thêm token nếu có
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default httpClient;
