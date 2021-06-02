import axios from 'axios';

const api = axios.create({
  baseURL: 'https://app-party-users.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
