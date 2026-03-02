import axios from "axios";

const api = axios.create({
  baseURL: "https://69a45f9e611ecf5bfc24c8de.mockapi.io/",
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
