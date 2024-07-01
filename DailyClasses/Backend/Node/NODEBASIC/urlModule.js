const url=require('url');
// const urlString='https://www.example.com/datafile/file.txt';
// const data=url.parse(urlString); //inspect url
// console.log(data);

// at time of searching query will executed
// const urlString='https://www.example.com/path?query=value#id';
// const data=url.parse(urlString,true).query; //gives query
// console.log(data);


// const urlString='https://www.google.com/search?q=google+spreadsheet&rlz=1C1VDKB_enIN1104IN1104&oq=google+spre&gs_lcrp=EgZjaHJvbWUqCggAEAAYsQMYgAQyCggAEAAYsQMYgAQyBggBEEUYOTINCAIQABiDARixAxiABDIHCAMQABiABDINCAQQABiDARixAxiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABKgCCLACAQ&sourceid=chrome&ie=UTF-8';
// const data=url.parse(urlString,true).query; //gives query
// console.log(data);
// const urlString='https://docs.google.com/spreadsheets/d/1PZv7VvhNihP0FILmc1iQedDXc64jRNkDX4eO_2Qtw-A/edit?gid=0#gid=0';
// const data=url.parse(urlString,true).query; //gives query
// console.log(data);

const urlString='https://docs.google.com/spreadsheets/d/1jrpTETXiUTSkpPUX6kYjUv-a4cHk92IOa0sHGpn7Zcc/edit?gid=1386834576#gid=1386834576';
const data=url.parse(urlString,true).query; //gives query
console.log(data);