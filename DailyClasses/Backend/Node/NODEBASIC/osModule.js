// const os=require('os');
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.arch());
// console.log(os.release());
// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.cpus().length); 
// console.log(os.uptime()); //kitne din se shutdown nhi hua
// console.log(os.EOL)
// console.log(os.constants);
// console.log(os.getPriority());
// console.log(os.hostname());
// console.log(os.availableParallelism());
// console.log(os.devNull);
// console.log(os.homedir());
// console.log(os.loadavg());
// console.log(os.networkInterfaces());
// console.log(os.tmpdir());
// console.log(os.type());
// console.log(os.userInfo());
// console.log(os.version());

// Node.js program to demonstrate the    
// os.uptime() method
 
// Allocating os module
const os = require('os');
 
// Printing os.uptime() value
let ut_sec = os.uptime();
let ut_min = ut_sec / 60;
let ut_hour = ut_min / 60;
 
ut_sec = Math.floor(ut_sec);
ut_min = Math.floor(ut_min);
ut_hour = Math.floor(ut_hour);
 
ut_hour = ut_hour % 60;
ut_min = ut_min % 60;
ut_sec = ut_sec % 60;
 
console.log("Up time: "
    + ut_hour + " Hour(s) "
    + ut_min + " minute(s) and "
    + ut_sec + " second(s)");