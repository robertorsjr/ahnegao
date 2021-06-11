import api, { endpoints } from './index'

export async function getPosts(offset) {
  const { get } = api
  return get(endpoints.posts(offset))
}