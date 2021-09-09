export const setSessionStorage = (key, value) => {
  sessionStorage.setItem(key, value)
}

export const getSessionStorage = (key) => {
  return sessionStorage.getItem(key)
}

export const removeSessionStorage = (key) => {
  return sessionStorage.removeItem(key)
}

const myHeroesKey = 'myHeroes'

export const addHeroeToMyLocal = (heroe) => {
  const myHeroes = JSON.parse(getSessionStorage(myHeroesKey)) || []
  myHeroes.push(heroe)
  setSessionStorage(myHeroesKey, JSON.stringify(myHeroes))
}