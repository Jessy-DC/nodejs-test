require('babel-register')

console.log('Start')
new Promise(((resolve, reject) => {
    setTimeout(() => {
        resolve('All good !')
        //reject(new Error('Error during...'))
    })
}))
    .then((message) => {console.log(message)})
    .catch((err) => {console.error(err.message)})

console.log('End')
