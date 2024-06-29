const url=require('url');
// const urlString='https://www.example.com/datafile/file.txt';
// const data=url.parse(urlString); //inspect url
// console.log(data);

// at time of searching query will executed
const urlString='https://www.example.com/path?query=value#id';
const data=url.parse(urlString,true).query; //gives query
console.log(data);


