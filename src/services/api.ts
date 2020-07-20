import axios from 'axios';
import marvelapi from '../config/marvelapi';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
});

api.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params.apikey = marvelapi.apyKey;
  config.params.hash = marvelapi.md5;
  config.params.ts = marvelapi.timestamp;
  return config;
});

export default api;
