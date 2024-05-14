// const fs=require('fs');
// fs.readFile('myfile.txt', 'utf-8',(err,data)=>{
//     console.log(data); //give in ascii value so use above utf-8
// })


// without using utf-8
// const fs=require('fs'); 
// fs.readFile('myfile.txt', 'utf-8',(err,data)=>{ //here (err, data ) are callback function
//     console.log(data.toString()); 
// })

// callback is asynchronous so it will take time so below code executed first
// here arrow function s callback
// console.log("finished Reading"); //this will execute first


// synchronous way
// do not use arrow function output will not get
// const fs = require('fs');
// const data=fs.readFileSync('myfile.txt');
// console.log(data.toString());
// console.log("finished Reading");

// read multiple files together
// const files=['myfile.txt','myfile2.txt'];
const fs = require('fs');
// files.forEach((file)=>{
//     const data=fs.readFileSync(file,'utf-8');
//     console.log(`contents to file ${file}`);
//     console.log(data);
//     console.log('----------------');
// })

// for(let file of files){
//     const data=fs.readFileSync(file,'utf-8');
//     console.log(`contents to file ${file}`);
//     console.log(data);
//     console.log('----------------');
// }

function readFileData(...filepaths) {
    console.log(filepaths); //rest operator takes all data and stores file name in array format

    var ignores = ['myfile3.txt', 'myfile4.txt']
    filepaths.forEach((filepath) => {
        try {
            // if(filepath!='myfile3.txt'){
            if (!ignores.includes(filepath)) {
                const filecontent = fs.readFileSync(filepath, 'utf-8');
                console.log(filecontent);
            }
            else{
                console.log("not allowed");
            }
        }
        catch (e) {
            console.log(e);
        }
    })
}

readFileData('myfile.txt', 'myfile2.txt', 'myfile3.txt', 'myfile4.txt')