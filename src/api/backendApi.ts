import axios from 'axios';

export const baseURL = "http://127.0.0.1:4000/";

export const backendApi = axios.create({
  baseURL: baseURL,
});