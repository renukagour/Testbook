{
    let a = 10;
    const b = 20;
    var c = 12;
}

// console.log(a); //error not next could not be executed further so we need to use error handling
// function show(){
//     console.log("hello");
// }
// show();
// console.log(c); //only this accessible

try {
    console.log(a);
}
catch (e) {
    console.log(e.name, e.message);
}
function show() {
    console.log("hello");
}
show();
console.log(c);