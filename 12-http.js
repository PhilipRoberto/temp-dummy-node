const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end('Welcome to our home page')
    }
    if (req.url === "/about") {
        res.end('Welcome to our about page')
    }
    // res.end(`<h1>Oops!</h1><p>Page not found</p><a href="/">back home</a>`)
})

server.listen(5000);


// console.log(req);
// res.write('Welcome to our homepage');
// res.end();