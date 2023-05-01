import axios from "axios";

export const api = axios.create({
  baseURL: "https://json-server-base-api-atguilherme.onrender.com",
  timeout: 8000,
});


// export const api = axios.create({
//   baseURL: "http://localhost:3001/",
//   timeout: 8000,
// });
