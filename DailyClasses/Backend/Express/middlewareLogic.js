module.exports =  reqFilter = (req,res,next)=>{
    if(!req.query.age){
        res.send("<h1>please provide age</h1>")
    }
    else if(req.query.age<18){
        res.send("you are not eligible")
    }
    else{
        next();
    }
}