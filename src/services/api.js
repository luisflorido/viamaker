/* eslint-disable no-param-reassign */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/api/v1',
});

api.interceptors.request.use(async (config) => {
  const token = sessionStorage.getItem('@access_token');
  console.log('TOKEN', token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
