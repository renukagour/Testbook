const express =require('express');

const app =express();
const path =require('path');

//pgm start from app.use if same this line below app.get / no use of them
// app.use(express.static(path.join(__dirname,'public'))); 

//below can be acceessed by localhost:3500/dataindex
app.use('/dataindex',express.static(path.join(__dirname,'public'))); 

//if only one present file no need to give file name else we have to give file name
app.use('/demofileindex',express.static(path.join(__dirname,'public/demofile.html'))); 

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