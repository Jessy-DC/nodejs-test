require('babel-register')
console.log('Start')
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1')
    }, 1500)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2')
    }, 3000)
})

Promise.all([p1, p2])
    .then(result => console.log(result))

console.log('End')