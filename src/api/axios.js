import axios from 'axios';

const BASE_URL = 'http://localhost:9999';

export default axios.create({
  baseURL: BASE_URL,
});
