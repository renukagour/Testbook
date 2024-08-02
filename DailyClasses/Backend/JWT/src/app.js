require('dotenv').config();
const express=require('express');
const app=express();
const path=require('path');
const hbs=require('hbs');
const port=3500;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// before run we need to specify that which engine have to use
app.set('view engine','hbs');

// also so error because it can not find vies folder
// so we need to specify where views folder is
const template_path=path.join(__dirname,'../templates/views');
const partials_path=path.join(__dirname,'../templates/partials');
app.set('views',template_path);
hbs.registerPartials(partials_path);
// also so error because it can not find partials folder
// so we need to specify where partials folder is

//getting database
require('./db/conn');
const Register= require('./models/register');

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/register',(req,res)=>{
    res.render('register')
})

app.post('/register',async (req,res)=>{
   try{
   const password=req.body.password;
    const confirmpassword=req.body.confirmpassword;
    if(password===confirmpassword){
        const registerStudents=new Register({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            gender:req.body.gender,
            password:req.body.password,
            confirmpassword:req.body.confirmpassword,
        })

        const token=await registerStudents.gennerateAuthToken();
        console.log(token);
        res.cookie('jwt',token,{
            expires:new Date(Date.now()+300000),
            httpOnly:true
        })
        const registerresult=  await registerStudents.save();
        res.render('index')
        
    }

   }
   catch(e){
   console.log(e);
   }
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})