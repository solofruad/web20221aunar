const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

var hello = 'Hello'
let number = 3

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end(hello+ ': Hola mundo '+number)
})

server.listen(port, hostname, () =>{
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`)
})