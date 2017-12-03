import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://vegan-burger.firebaseio.com/'
});

export default instance;