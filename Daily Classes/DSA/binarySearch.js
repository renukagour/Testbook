//Iteration
function binarySearch(arr, target) {
    let n=arr.length;
    let s=0;
    let e=n-1;
    
    while (s <= e) {
        m = Math.floor((s + e) / 2);
        if (target == arr[m])
            return m;
        else if (target < arr[m]) {
            e = m - 1;
        }
        else
            s = m + 1;
    }
    return -1;
}

//recursion
// function binarySearch(arr, target, s, e) {
//     if (s > e)
//         return -1;
//     let m = Math.floor((s + e) / 2);

//     if (target == arr[m])
//         return m;
//     else if (target < arr[m]) {
//         return binarySearch(arr, target, s, m - 1);
//     }
//     else
//        return  binarySearch(arr, target, m + 1, e);

// }

arr = [2, 3, 4, 5, 6, 7, 9, 10];
let n = arr.length;

// res = binarySearch(arr, 7, 0, n - 1);
// console.log(res);
res=binarySearch(arr,7)
console.log(res);