const express=require('express');
const app=express();
const cors=require('cors');
const port=3500;
const jwt = require('jsonwebtoken');
const router =express.Router();
const path=require('path');
const cookieParser = require('cookie-parser');

app.get('/', async (req,res)=>{
    try {
        res.render('index');
    } catch (e) {
        console.log(e);
        res.render('error',{e:e.message});
    }
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
