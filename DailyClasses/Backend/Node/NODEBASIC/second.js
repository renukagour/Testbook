// const studentDetails={
//     name:'Peter',
//     uid:47,
//     course:"js",
//     marks:98
// }

// function smartwork(){
//     console.log('smartwork')
// }
// function hardwork(){
//     console.log('hardwork')
// }

// smartwork();
// hardwork();

// const employeeDetails={
//     name:'john',
//     eid:47,
//     dept:"IT",

// } //not export this
//need to export
// module.exports=studentDetails;
// module.exports=employeeDetails,hardwork,smartwork,studentDetails; //only first show
// module.exports=hardwork,employeeDetails,smartwork,studentDetails;

// module.exports={employeeDetails,hardwork,smartwork,studentDetails};

//access in the from of array
// module.exports=[employeeDetails,hardwork,smartwork,studentDetails];

// for es6

export const studentDetails={
    name:'Peter',
    uid:47,
    course:"js",
    marks:98
}

export function smartwork(){
    console.log('smartwork')
}
export function hardwork(){
    console.log('hardwork')
}

// smartwork();
// hardwork();

export const employeeDetails={
    name:'john',
    eid:47,
    dept:"IT",

}

// export default function extra(){
//     console.log(" default value");
// }

//if you want to pass object 
// it will show error because not will be use default in front of const 
// export default const extradetails={
//     name:'extra name'
// }

// so use this syntax
const extradetails={
    name:'extra name'
}

export default extradetails;

