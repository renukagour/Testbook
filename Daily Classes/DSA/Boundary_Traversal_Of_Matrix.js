// To print boundry matrix for n*m matrix
//first print 1)First Row  direction ->  left to right i=0 and j=0 to m-1
// 2)last column  top to bottom    j=m-1 and i=1 to n-1 not i=0 becoz do not to repeat j=m-1 and i=0 element
// 3)last Row   <- right to left   i=n-1 and j=m-2 to 0 same here
// 4)first column bottom to top    j=0  and i=n-2 to 1

let arr=[
[1,2,3,4],
[5,6,7,8],
[9,10,11,12],
[13,14,15,16]
];
//Boundary Traversal -> 1 2 3 4 8 12 16 15 14 13 9 5

ans=[];
let n=arr.length;
let m=arr[0].length;

//first row, i=0, j=0 to m-1
for (let j = 0; j <= m-1; j++) {
    ans.push(arr[0][j]);
}

// last column   j=m-1 and i=1 to n-1
for (let i = 1; i <= n-1; i++) {
    ans.push(arr[i][m-1]);
}
// last Row   i=n-1 and j=m-2 to 0 
for (let j = m-2; j >=0; j--) {
    ans.push(arr[n-1][j]);
}
// first column   j=0  and i=n-2 to 1
for (let i = n-2; i>=1; i--) {
    ans.push(arr[i][0]);
}
console.log(ans);
