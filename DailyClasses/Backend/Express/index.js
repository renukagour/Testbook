const express =require('express');

const app =express();
const path =require('path');

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.send("<h1>Hello from home page</h1>");
})
app.get('/about',(req,res)=>{
    res.send("<h1>Hello from About page</h1>");
})
app.get('/contact',(req,res)=>{
    res.send("<h1>Hello from Contact page</h1>");
})

app.get('*',(req,res)=>{
    // res.sta tus(404);
    res.send("<h2>Error page</h2>");
});

app.listen(3500,()=>{
    console.log("server is running on port 3500");
})