const http = require('http')
const fs = require('fs')

http.createServer((req, res) =>{

    if(req.url === '/') {
        res.write('<h1>Accueil</h1>')
        res.end();
    } else if (req.url === '/test') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        })
        fs.readFile('test.txt', 'utf-8', (err, data) => {
            if (err) {
                send404(res)
            } else {
                res.write(`<h1>${data}</h1>`)
                res.end();
            }
        })
    } else {
        send404(res);
    }


}).listen(8080)

function send404(res) {
    res.writeHead(404, {
        'Content-type': 'text/html'
    })
    res.write("<span>Erreur 404</span>")
    res.end()
}