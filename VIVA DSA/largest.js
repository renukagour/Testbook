function largest(arr){
  let n=arr.length;
  let max=arr[0];
  let smax;
  for(let i=1;i<n;i++){
     if(arr[i]>max){
       smax=max;
       max=arr[i];
     }
  }
  return smax;
}

let arr=[1,2,3,5,6,6];
console.log(largest(arr));
