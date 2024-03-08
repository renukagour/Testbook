function linearsearch(arr ,target){
    let n=arr.length;
    for(let i=0;i<n;i++){
        if(arr[i]==target)
        return i;
    }
   return -1;
}

let arr=[3,1,2,4,5,6,9,7];
let target=60;
ans=linearsearch(arr,target);
if(ans==-1)
console.log("Element not found");
else
 console.log("Element is found at index "+ans);