const fs=require('fs');

// fs.writeFile('myfile3.txt','How are you?',(err,data)=>{
//   console.log(data);
// }) 

// fs.writeFileSync('myfile4.txt','Johnny Johnny yes papa!')

// fs.appendFile("myfile5.txt"," I hope you find well !",(err,data)=>{
//     console.log(data);
// })

// fs.writeFileSync('myfile6.txt','This is file 6') //if file not present automatically create
// fs.appendFile("myfile7.txt"," I hope you find well !",(err,data)=>{
//     console.log(data);
// })


// creating folder
// fs.mkdir('datafolder',()=>{
//     console.log("creating folder");
// })

// deleting folder
// fs.rmdir('datafolder',()=>{
//     console.log("deleting folder");
// })

// deleting file

// fs.unlink('myfile7.txt',()=>{})

// renaming
// fs.rename('myfile.txt','myfile1.txt',()=>{});


// creating multiple files

for(let i=1;i<6;i++){
    // fs.writeFileSync(`file-${i}.txt`,`This is my file-${i} data` )
    // fs.writeFileSync(`file-${i}.csv`,`EmpName,EmpDept` )
    // fs.writeFileSync(`file-${i}.csv`,`EmpName\nJohn, Doe\nMarie, Jane,EmpDept\nCSE,\nECE` )

    fs.writeFileSync(`datafile/file-${i}.txt`,`This is my file-${i} data` )
    fs.writeFileSync(`datafile/file-${i}.csv`,`EmpName\nJohn, Doe\nMarie, Jane,EmpDept\nCSE,\nECE` )
}

// copy data from one file to another file Pending

