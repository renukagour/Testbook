//Given a array with range 1 to N distinct numbers of length n-1 find missing number find missing number
let n=5;
let arr=[3,4,1,5];
let total=n*(n+1)/2;
let currtotal=0;
for(let i=0;i<n-1;i++){
    currtotal+=arr[i];
}
let missing=total-currtotal;
console.log(missing);
//not to use for loop we have formula 
// sum=n*(n-1)/2

//we can do by sorting but not thant much sufficient