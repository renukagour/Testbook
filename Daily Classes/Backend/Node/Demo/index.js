// const http = require("http")
// const server=http.createServer((req,res)=>{
//     console.log(req.url);
//     if(req.url === '/'){
//         res.write('welcome to our home page');
//         res.end();
//     }
//     else if(req.url==='/about'){
//         res.end('about page');
//     }
//     else {
//         res.end(
//             `<h1>Oops!
//             <p>this page doesn't exist<p>
//             <a href='/'>back home</a>`
//         );
//     }
// })

// server.listen(5000);

function getFile(path, contentType, res) {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.end('<h1>File Not Found<h1>');

        }
        else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    })
}

const http = require("http")
const server = http.createServer((req, res) => {
    console.log("The request is made for ", req.url);
    if (req.url === '/') {
        let
            path = './index.html',
            contentType = './text/html';

        getFile(path, contentType, res);
    }
    else if (req.url === '/homepage.js') {
        getFile("./homepage.js", 'application.js', res);
    }
    else if (req.url === '/index.css') {
        getFile("./index.css", 'text/css', res);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end(
            `<div><h1>Oops!
            <p>this page doesn't exist<p>
            <a href='/'>back home</a></div>`
        );
    }
})

server.listen(5000);