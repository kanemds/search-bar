import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPosts = async () => {
  const res = await api.get('/posts')
  return res.data
}