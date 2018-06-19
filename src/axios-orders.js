import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vegan-b.firebaseio.com/',
})

export default instance
