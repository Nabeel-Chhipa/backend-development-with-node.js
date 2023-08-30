const http = require('http')

const port = 800

http.createServer((req, res) => {
    res.write('<h1>Server Start</h1>')
    res.end()
}).listen(port)