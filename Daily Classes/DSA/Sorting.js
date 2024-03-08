function bubblesort(arr) {
    let n = arr.length;
    for (let i = 1; i <= n; i++) {//loop for pass
        for (let j = 1; j <= n - i; j++) {  //comparing adjustent ele in pass
            //index here we are start from 1 so compare with previous
            //every j compare with previous
            if (arr[j - 1] > arr[j]){
                // swap(arr[j - 1], arr[j]);
            arr[j-1]=arr[j-1]^arr[j];
            arr[j]=arr[j-1]^arr[j];
            arr[j-1]=arr[j-1]^arr[j];
            }
        }

    }
    return arr;
}


let arr = [5, 1, 2, 3, 55, 7];
//console.log(arr.sort());
//console.log(arr.sort(function (a, b) {
//    return a - b;
//}));
console.log(bubblesort(arr));
let a=2;b=3;
b=a-b;
a=a+b;
b=a-b;
console.log(a,b);