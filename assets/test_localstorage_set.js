// console.log('test set')
// const person = {
//   name: "Mirio Togawa",
//   location: "BHA",
// }
// window.localStorage.setItem('user', JSON.stringify(person))

window.onload = () => {
  const iframe = document.getElementById('messengerIframe')
  iframe.contentWindow.postMessage({
    action: 'save',
    key: 'key',
    value: 'hello world'
  })
  console.log('value set')
}
