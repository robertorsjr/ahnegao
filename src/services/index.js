import axios from 'axios';

const api = axios.create({ baseURL: 'https://www.ahnegao.com.br/wp-json/wp/v2' })

export const endpoints = {
  posts: '/posts',
  tag: (id) => `/tags?post=${id}`,
  author: (id) => `/users/${id}`,
  categories: (id) => `/categories?post=${id}`,
}

export default api;