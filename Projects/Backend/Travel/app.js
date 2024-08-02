const express=require('express');
const app=express();
const cors=require('cors');
const port=3500;
const jwt = require('jsonwebtoken');
const router =express.Router();
const path=require('path');

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
