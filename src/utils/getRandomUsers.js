import defaultUser from './defaultUser'

const throwNon200 = response => {
  console.log(response)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response
}

const getRandomUser = () =>
  fetch('https://randomuser.me/api/')
    .then(throwNon200)
    .then(res => res.json())
    .catch(e => console.log('Error getting new random user: ', e.message))

const getRandomUserOfNationality = n =>
  fetch(`https://randomuser.me/api/?nat=${n}`)
    .then(throwNon200)
    .then(res => res.json())
    .catch(e => console.log(e))

const getRandomUserGuarded = () =>
  getRandomUser()
    .then(res => res || defaultUser)
    .catch(e => console.log(e))

export { getRandomUser, getRandomUserOfNationality, getRandomUserGuarded }
