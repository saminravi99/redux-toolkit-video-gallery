import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9000",
});

export default axiosInstance;

// http://localhost:9000
// https://redux-toolkit-video-gallery-server.onrender.com
