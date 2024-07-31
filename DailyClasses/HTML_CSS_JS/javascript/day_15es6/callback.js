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

function friendCalll1(friendCalll2 = () => {
    console.log("see I have called you");
}) {
    setTimeout(() => {
        console.log("Taking to friend 1 and i call you after 3 seconds");
        friendCalll2();
    }, 3000)

}


