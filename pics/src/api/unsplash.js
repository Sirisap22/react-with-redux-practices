import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID qJ0nZsKgx7PYX_xn94y_jLFaK1zGVDPphiDK-hml7LM',
  },
});
