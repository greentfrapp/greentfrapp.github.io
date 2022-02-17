console.log('test2')
const person = {
  name: "Mirio Togawa",
  location: "BHA",
}
window.localStorage.setItem('user', JSON.stringify(person))
console.log(JSON.parse(window.localStorage.getItem('user')))