// let fruits = ["apple", "banana ", "mango", "orange"];
// console.log(fruits);
// let mix = [5, "Hello", true]; //in js it can be diferent type
// console.log(mix);

//accessing
// let arr = [2, 5, 77, 9];
// console.log(arr[2]);

// let marks = [98, 96, 94, 95, 92];
// console.log(marks[4]);
// console.log(marks);
//modifying elements of aray
// marks[4] = 98;
// console.log(marks[4]);
// console.log(marks);
//length
// console.log(marks.length);
//Iterate in array
// n=marks.length;
// sum = 0;
// for (i = 0; i < marks.length; i++)
//     sum += marks[i];
// avg=sum/n;
// let per =sum*100/(n*100);
// console.log(sum," ",avg," ",per);

//sort methods

// marks.sort();
// console.log(marks);
// console.log(marks.reverse()); 
// console.log(marks);
// let arr=[3,2,5,8,9,6,2];

// console.log(arr);
// console.log(arr.length);
// arr.push(2);
// console.log(arr);
// console.log(arr.length);
// arr.pop();
// console.log(arr);
// console.log(arr.length);
// console.log(arr.indexOf(9));
// console.log(arr.indexOf(10));//if element not present => -1
// console.log(arr.indexOf(2));//if element present many times  => first occurence inedx
// console.log(arr.lastIndexOf(2)); //last occurence index

//let a=[3,2,5,8,9,6,2];
//console.log(a.includes(90));
//console.log(a.includes(9));
//syntax find
//array.find(function(currentValue, index, arr), thisValue)
let array = [2, 7, 8, 9];
let found = array.find(function (element) {
    return element > 4;
});
console.log(found);//7
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);//[1,2,3,4,5,6]
// lastindexof
// find
// findindex
// findlast
// findlastindex