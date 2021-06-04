import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'https://app-party-users.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (config) => {
    const routes = [
      '/signup',
      '/login',
    ];

    if (!routes.includes(config.route)) {
      const token = await AsyncStorage.getItem('token');

      config.headers.authorization = `Bearer ${token}`;
      return config;
    }
  },
  (err) => {
    Promise.reject(err);
  },
);

export default api;
