function SortArray(arr){
 let n=arr.length;
 for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
 }
 return arr;
}

let arr=[10,50,87,52,32]
console.log(SortArray(arr));