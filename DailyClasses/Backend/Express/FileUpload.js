const express=require('express');
const app=express();
const upload=require('express-fileupload');

app.use(upload());

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})


app.post('/',(req,res)=>{
    console.log("inside post");
    if(req.files){
        console.log(req.files);
        var file=req.files.file; //here file is variable that name given to file
        console.log('the file is',file);
        var filename=file.name;
        console.log(filename);

        file.mv('./uploads/'+filename,function(err){
            if(err){
                res.send(err.message)
            }
            else{
                res.send('File has been uploaded')
            }
        })
        // res.send();

    }
})


app.listen(3800,()=>{
    console.log("server is running on port 3800");
})

