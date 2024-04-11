let arr = [
    [1, 2, 3],
    [4,5, 6],
    [7, 8, 9],
  ];
  //transpose => interchange rows and columns 

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
  if (i>j ) { //do either i>j or j<i not for both same time
    console.log('swap');
    arr[i][j]=arr[i][j]+arr[j][i];
    arr[j][i]=arr[i][j]-arr[j][i];
    arr[i][j]=arr[i][j]-arr[j][i]; 
  }
    }
  }
  console.log(arr)