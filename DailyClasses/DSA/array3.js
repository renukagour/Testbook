//merge two sorted arrays
let arr1=[1,3,5,7,0,0,0];
let arr2=[2,4,6,8];
let n=arr1.length;
let m=arr2.length;
let arr=[];
let i=j=k=0;
while(i<n && j<m){
   if(arr1[i]<arr2[j]){
    arr[k]=arr1[i];
    i++;
    k++;
   }
   else{
    arr[k]=arr2[j];
    j++;
    k++;
   }
}

while(i<n){
    arr[k]=arr1[i]
    i++;
    k++;
}

while(j<m){
    arr[k]=arr2[j]
    j++;
    k++;
}
// console.log(arr.sort());
console.log(arr);

//arr=[1,2,3,4,5,6,7,8]