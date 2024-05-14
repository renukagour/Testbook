var array1 = [1,2,3,4];

for (var index in array1) {
    console.log(array1[index]);
}

for (var element of array1) {
    console.log(element);
}
// foreach
array1.forEach(function (element, index) {
    console.log(element);
});
array1.forEach(function (element, index) {
    console.log(array1[index]);
});
// in case of objects
const student = {
    name: 'Peter',
    uid: 47,
    course: "js"
}

for (let [key, value] of Object.entries(student)) {
    console.log(key + " " + value);
}

//function declaration
function SharedWorker() {

}
//fun expression
const display = function () {
    console.log("display function")
}

display();