import api, { endpoints } from './index'

export async function getPosts() {
  const { get } = api
  return get(endpoints.posts)
}