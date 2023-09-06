const http = require("http");
const data = require("./data");

const port = 8080;

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "applicationjson",
    });
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(port);
