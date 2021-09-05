export const setSessionStorage = (key, value) => {
  sessionStorage.setItem(key, value)
}

export const getSessionStorage = (key) => {
  sessionStorage.getItem(key)
}
