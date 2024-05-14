const os=require('os');
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.arch());
console.log(os.release());
console.log(os.platform());
// console.log(os.cpus());
console.log(os.cpus().length); 
console.log(os.uptime()); //kitne din se shutdown nhi hua
console.log(os.EOL)
console.log(os.constants);
console.log(os.getPriority());
console.log(os.hostname());