// const details=require('./second'); //import
// console.log(details);
// console.log(details.name);
// console.log(details.name);

// const {employeeDetails}=require('./second'); //import one by one that particularly
// console.log(employeeDetails);


//for array
// const details=require('./second'); //import
// console.log(details);
// console.log(details.employeeDetails); //undefined
// console.log(details.employeeDetails.dept); //error
// console.log(details.smartwork());
// console.log(details[0]);

// this is esma script part so change done in package.json type:module
// import {studentDetails,employeeDetails,hardwork} from './second.js'; //use always curly braces and use export keyword for each in second.js
// console.log(studentDetails);
// console.log(employeeDetails);
// console.log(hardwork())

//if there is not found it will execute default value
// import studentDetails from './second.js'; 
// console.log(studentDetails);

const course=require('./third'); //this will not execute till change in package.json file type
console.log(course);
console.log('data');
console.log("done")