import axios from 'axios';
const ServerURL = process.env.VUE_APP_VAR
const publicApi = axios.create({
  baseURL:ServerURL,
});

export default publicApi;