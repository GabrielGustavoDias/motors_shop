import axios from "axios";

export const instanceKenzieKars = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export const instanceMotorsShop = axios.create({
  baseURL: "https://motors-shop-back-end.onrender.com",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});
