console.log("msg receiver loaded")
console.log(localStorage.getItem('user'))
window.onmessage = function(e) {
    console.log('got message')
    console.log(localStorage.getItem('user'))
}