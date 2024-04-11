const finddiagonalsum=(arr)=>{
    let n = arr.length;
    //primary diagonal element 1 5 9
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i][i];
    }
    // console.log(sum);
    
    //secondary diagonal element 3 5 7
    //02 11 20
    let i = 0,
        j = n - 1;
    while (i < n && j >= 0) {
        // console.log(arr[i][j]);
        sum += arr[i][j];
        i++;
        j--;
    
    }
    //duplicates in 3*3 5*5 i.e. only odd numbers
    if (n & 1) {
        sum = sum - arr[(n - 1) / 2][(n - 1) / 2];
    }
    return sum;
}

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
let arr2=[[1,2,3,4],
          [5,6,7,8],
          [9,10,11,12],
          [13,14,15,16]];

console.log(finddiagonalsum(arr));
console.log(finddiagonalsum(arr2));

//    console.log(m&1);

//    m&1==1(true)==>odd

//convert 1d to 2d array
//possible in no. of elements =m*n e
//where m=no. of rows and n=no. of column
