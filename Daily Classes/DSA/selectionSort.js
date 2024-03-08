function selectionsort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {//n-1  passes
        let smallest=i; //using to find smallest element of index
        for (let j = i+1; j <= n-1; j++) {  //find the minimumm
            
            if (arr[smallest] > arr[j]){
                smallest=j;
           
            }
        }
        //swap smallest element with i
       let temp= arr[smallest];
       arr[smallest]=arr[i];
       arr[i]=temp;

    }
    return arr;
}


let arr = [5, 1, 2, 3, 55, 7];
selectionsort(arr)
console.log(arr);
