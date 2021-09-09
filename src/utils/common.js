import configData from '../config/development.env.json'

export const wrapWithLoadingPause = (callback, ms) => {
  setTimeout(callback, ms)
}

export const getUrl = (path) => {
  return `${configData.API_BASE_URL}/${path}`
}