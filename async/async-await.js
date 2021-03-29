require('babel-register')

console.log('Start');

(async () => {
    try {
        let member = await getMember()
        let articles = await getArticles()
        console.log(articles)
    } catch (err) {
        console.log(err.message)
    }
})()

function getMember() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Member 1')
        }, 1500)
    })
}

function getArticles() {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3])
        }, 1500)
    }))
}
console.log('Fin')