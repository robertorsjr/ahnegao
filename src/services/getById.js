import api, { endpoints } from './index'

export async function getTagById(id) {
  const { get } = api
  return get(endpoints.tag(id))
}

export async function getAuthorById(id) {
  const { get } = api
  return get(endpoints.author(id))
}

export async function getCategoryById(id) {
  const { get } = api
  return get(endpoints.categories(id))
}