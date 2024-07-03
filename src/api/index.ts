import axios from 'axios';

const $host = axios.create({
  baseURL: 'https://xaverd.hopto.org',
});

export { $host };
