// promise is an object than can accept two parameters in a function
// resolve and reject
// resolve --- success ==jo object pass liya tha fulfil ho gya hai
// reject --- failure
// syntax
// var mypromise =new Promise(function(resolve,reject){

// })

// var mypromise =new Promise(function(resolve,reject){
//     const mynumber1= 10;
//     const mynumber2= 10;
//     if(mynumber1==mynumber2){
//         resolve();
//     }
//     else{
//         reject();
//     }
// })

//above code does not show any output
// because you define when to reolve but what to do after resolve
// so use below code

// mypromise
// .then(()=>{
//     console.log("my matter is resolved");
// })
// .catch(()=>{
//     console.log("my matter is rejected");
// })

//promise is in function

// function show() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true;
//             if (success) {
//                 resolve();
//             }
//             else {
//                 reject();
//             }
//         }, 3000);
//     })
// }

// show()
//     .then(() => {
//         console.log("my matter is resolved");
//     })
//     .catch(() => {
//         console.log("my matter is rejected");
//     })


var promise=new Promise(function(resolve,reject){
   resolve(10)
})

//whole pyramid in a function
promise.then(addition)
.then(subtraction)
.then(multiplication)
.then(division)
.then(function(data){
    console.log("the result is ",data);
})
.catch(()=>{console.log(e);})

function addition(val) {
    console.log("in addition", val);
    return (val + 5); //10+5=15
}

function subtraction(val) {
    console.log("in subtraction", val);
    return (val - 2); //15-2=13
}

function multiplication(val) {
    console.log("in multiplication", val);
    return (val * 5); //13*5=65
}

function division(val) {
    console.log("in division", val);
    return (val / 2); //65/2=32.5
}