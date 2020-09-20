import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "03bf7b4f663af97f9768519ade870e62",
    language: "en-US",
  },
});

api.get("tv/popular");

export default api;
