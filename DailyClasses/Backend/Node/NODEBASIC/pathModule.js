const path=require('path');
// const a=path.basename('c/data/folder1/myfile.js');
const a=path.basename('c\\data\\folder1\\myfile.js');
const b=path.extname('c\\data\\folder1\\myfile.js');
const c=path.dirname('c\\data\\folder1\\myfile.js');
console.log(a); //filename myfile.js
console.log(b); //extension .js
console.log(c); //directory  c\data\folder1
console.log(__filename,"    \n",__dirname); //current file and directory path