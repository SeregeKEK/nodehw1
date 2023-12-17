'use strict';

const http = require('http');
let mainCount = 0;
let aboutCount = 0;
const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'})
            res.end(`
            <h1>Главная страница сайта</h1>
            <a href='/about'>About page</a>
            <p>Количество посещений: ${++mainCount}</p>
            `);
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'})
            res.end(`
            <h1>Страница about</h1>
            <a href='/'>Maim page</a>
            <p>Количество посещений: ${++aboutCount}</p>
            `);
            break;
    
        default:
            res.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'})
            res.end(`
            <h1>Страница не найдена</h1>
            <a href='/'>Back to maim page</a>
            `);
            break;
    }
});

const port = 3000;
server.listen(port);
