let arr = [
  [1, 2, 3],
  [4,5, 6],
  [7, 8, 9],
];
// console.log(arr)
let arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10],
];
// console.log(arr1) //in js arrays are dynamic
//indexing
// console.log(arr1[1][0])
arr1[1][1] = 50;
// console.log(arr1)
console.log(arr1[0]);
//iteration
let sum = 0;
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     sum += arr[i][j];
//   }
// }
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
}
console.log(`sum = ${sum}`);
console.log(sum)

