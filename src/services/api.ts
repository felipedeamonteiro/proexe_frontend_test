import axios from 'axios';

// Connection made with the api
const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb',
});

export default api;
