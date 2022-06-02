import axios from "axios";
const BASE_URL = "https://pokeapi.co/api/v2/";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export const clearPage = (url) => {
  const newPage = url.replace(BASE_URL, "");
  return newPage;
};
