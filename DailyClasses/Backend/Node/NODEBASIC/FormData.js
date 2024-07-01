const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const { log } = require('console');

const server =http.createServer((req,res)=>{
    const parsedurl=url.parse(req.url,true);

    if(parsedurl.pathname==='/'){
        fs.readFile(path.join(__dirname,'FormData.html'),(err,data)=>{
            if(err){
                res.writeHead(500,{'Content-type':'text/plain'});
                res.end('Internal Error');
            }
            else{
               res.writeHead(200,{'Content-type':'text/html'});
               res.end(data) ;
            }
        });
    }
    else if(parsedurl.pathname==='/submit' && req.method=='POST'){
        let body=" ";
        req.on('data',chunk=>{
            body+=chunk.toString();
            console.log(body);
        })
        req.on('end',()=>{
            const params=new URLSearchParams(body);
            console.log(params);
            const name = params.get(' name');
            console.log(name);
            if (name ){
                res.writeHead(200,{'Content-type':'text/html'});
                res.end(`<h1> Hello ${name} </h1>`);   
            }
            else {
                res.writeHead(500,{'Content-type':'text/plain'});
                res.end('Wrong  Error');
            }
           
        })
    }
});

server.listen(3200,()=>{
    console.log('server is running on port 3200');
});