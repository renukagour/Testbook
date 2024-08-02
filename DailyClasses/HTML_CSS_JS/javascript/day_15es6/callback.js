// callback -- we can pass function as parameter

//example

// function show(params) {

// }
// function display(params) {

// }

// display(show)

//usually

// function FunA(params) {
//     console.log("inside FunA");
// }
// function FunB(params) {
//     console.log("inside FunB");
// }
// FunA();
// FunB();

// function friendCalll1(callingfunction) {
//     setTimeout(() => {
//         console.log("Taking to friend 1 and i call you after 3 seconds");
//         callingfunction();
//     }, 3000)

// }

// function friendCalll2() {
//     console.log("see I have called you");
// }

// friendCalll1(); 
// friendCalll2();
// in above first called 2 then 1 so use below

// friendCalll1(friendCalll2);

// function friendCalll1(friendCalll2 = () => {
//     console.log("see I have called you");
// }) {
//     setTimeout(() => {
//         console.log("Taking to friend 1 and i call you after 3 seconds");
//         friendCalll2();
//     }, 3000)

// }


// friendCalll1();

// function friendCalll1() {
//     setTimeout(() => {
//         console.log("Taking to friend 1 and i call you after 3 seconds");
//         friendCalll2();
//     }, 3000)

// }
// const friendCalll2 = () => {
//     console.log("see I have called you");
// }

// friendCalll1();

// 10 
// add ---- 10+5=15
// 15-2=13
// 13*10=130
// 130/10
// in above example there is dependency or possible that the basic could not be possible.
// in that case you can use callback function

//callback dependency

// addition(10, function (address) {
//     subtraction(address, function (subster) {
//         console.log(subster);
//     })
// })
// function addition(val, callback) {
//     console.log("in addition", val);
//     return callback(val + 5);
// }

// function subtraction(val, callback) {
//     console.log("in subtraction", val);
//     return callback(val - 2);
// }

addition(10, function (address) {
    subtraction(address, function (subster) {
        multiplication(subster, function (multi) {
            division(multi, function (div) {
                console.log(div);
            })
        })
    })
})
function addition(val, callback) {
    console.log("in addition", val);
    return callback(val + 5); //10+5=15
}

function subtraction(val, callback) {
    console.log("in subtraction", val);
    return callback(val - 2); //15-2=13
}

function multiplication(val, callback) {
    console.log("in multiplication", val);
    return callback(val * 5); //13*5=65
}

function division(val, callback) {
    console.log("in division", val);
    return callback(val / 2); //65/2=32.5
}
//callback hell --- managing callbacks is complex and difficult
// so we this can be handle by promises