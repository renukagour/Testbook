// function show(){



//     let a=8;
//     console.log(a);
// }

// console.log("hello");
// // show();
// setTimeout(show,2000);
// console.log("hello again");

//above can be done by another way

// async function show(){
//     let a= await 8; //wait for 8 to store in a
//     console.log(a);
// }

// console.log("hello");
// show();
// console.log("hello again");
// hello
// hello again
// 8
// output of following code

// without async await is not used
// but when only async is used then it shows previous output
// that is hello, 8, hello again
// that is synchronous

// 


// async function showresult() {
//     let a =await addition(10);
//     let b =await subtraction(a);
//     let c =await multiplication(b);
//     let d =await division(c);
//     console.log(d);
// }

// showresult();
// function addition(val) {
//     console.log("in addition", val);
//     return (val + 5); //10+5=15
// }

// function subtraction(val) {
//     console.log("in subtraction", val);
//     return (val - 2); //15-2=13
// }

// function multiplication(val) {
//     console.log("in multiplication", val);
//     return (val * 5); //13*5=65
// }

// function division(val) {
//     console.log("in division", val);
//     return (val / 2); //65/2=32.5
// }




async function show() {
        let result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = true;
                if (success) {
                    resolve();
                }
                else {
                    reject();
                }
            }, 3000);
        })
        console.log("result", result);
    }
    show();