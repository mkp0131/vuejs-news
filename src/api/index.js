import axios from "axios";

axios.defaults.baseURL = "https://api.hnpwa.com/v0";

export const getFetchNews = () => {
  return axios.get("/news/1.json");
};

export const getFetchJobs = () => {
  return axios.get("/jobs/1.json");
};

export const getFetchAsk = () => {
  return axios.get("/ask/1.json");
};

export const getFetchUser = (id) => {
  return axios.get(`/user/${id}.json`);
};

export const getFetchItem = (id) => {
  return axios.get(`/item/${id}.json`);
};
