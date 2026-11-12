import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL?.trim().replace(/\/+$/, "");

if (!apiUrl) {
  throw new Error(
    "VITE_API_URL is not configured. Set it in an environment file or deployment settings.",
  );
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
