require('babel-register')
console.log('Start')
getMember()
    .then(member => getArticles())
    .then((articles) => { console.log(articles) })
    .catch(err => console.log(err.message))

function getMember() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Member 1')
            //reject(new Error('Error during getMember...'))
        }, 1500)
    })
}

function getArticles(member) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve([1,2,3])
            //reject(new Error('Error during getArticles...'))
        }, 1500)
    }))
}

console.log('End')