// const fs=require('fs')
// const data=['name,cost'];
// for(let i=0;i<10;i++){
//     data.push(`name${i}, Cost${i+2}`)
// }
// fs.writeFileSync('Streams/Data.csv',data.join('\n'));



const fs=require('fs')
const data=['name,cost'];
for(let i=0;i<1e8;i++){
    data.push(` name${i}, Cost${i+2}`)
}
fs.writeFileSync('Streams/Data.csv',data.join('\n'))