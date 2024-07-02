import axios from 'axios';

const $host = axios.create({
  baseURL: 'https://158.160.131.76',
});

export { $host };
