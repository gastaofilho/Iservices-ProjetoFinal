import axios from "axios";

export const api = axios.create({
  baseURL: "https://json-server-api-fake-8oys.onrender.com",
  timeout: 8000,
});
