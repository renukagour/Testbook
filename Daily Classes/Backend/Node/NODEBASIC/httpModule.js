// const http=require('http');
// const server=http.createServer((req,res)=>{
//     res.end('<h1>Your Google Page</h1>');
// })

// server.listen(5000);

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('<h1> Your home page</h1>');

    }
    else if (req.url == '/about') {
        res.write('<h1> Your about 1 page</h1>'); 
        res.end('<h1> Your about  2 page</h1>');// it is return statement so after it not any code  will be executed
    }
    else if (req.url == '/contact') {
        res.end('<h1> Your contact page</h1>');
    }
    else {
        res.statusCode = 404;
        res.end(
            `<h1>Oops! Error Page</h1>
                    <p>this page doesn't exist<p>
                    <a href='/'>back home</a>`
        );
    }
})

server.listen(5000);