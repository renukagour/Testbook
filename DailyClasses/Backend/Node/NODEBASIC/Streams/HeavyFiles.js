const fs =require('fs');
const http = require('http');
const port =3200;
const server =http.createServer();


// server.on('request',(req,res)=>{
//     fs.readFile('Datafile.csv',(err,data)=>{
//         if(err){
//             res.end("<h1> Cannot read data file</h1><h1>");
//             console.log(err);
//         }
//         else{
//             res.end(data.toString());
//         }
//     })
// })

// to read heavy files


server.on('request',(req,res)=>{
    const readsStream = fs.createReadStream('Datafile.csv');
    readsStream.on('data',(chunk)=>{
        res.write(chunk.toString());
    })
    readsStream.on('end',()=>{
        res.end('<h1>Error</h1>');
    })
})

server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})