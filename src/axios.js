import axios from "axios";

//!! API-KEY = 004fcb6a8066a384857d86858ea2bfa3

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
