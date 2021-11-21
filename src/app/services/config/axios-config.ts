import axios from 'axios';

const {
  api: {baseUrl, timeout, apikey},
} = require('@environment/env');

const instance = axios.create({
  baseURL: baseUrl,
  timeout,
  headers: {
    Authorization: `Bearer ${apikey}`,
  },
});

export default instance;
