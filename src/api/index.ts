import axios from 'axios';

const $host = axios.create({
  baseURL: 'http://158.160.131.76',
});

export { $host };
