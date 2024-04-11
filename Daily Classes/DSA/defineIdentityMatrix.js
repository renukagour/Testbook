let arr = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];
function check(arr) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i == j && arr[i][j] != 1) return false;
      if (i != j && arr[i][j] != 0) return false;
    }
  }
  return true;
}

console.log(check(arr))