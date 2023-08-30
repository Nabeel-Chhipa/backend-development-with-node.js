const http = require('http')

const port = 8080

http.createServer((req, res) => {
    res.write('<h1>Server Start</h1>')
    res.end()
}).listen(port)