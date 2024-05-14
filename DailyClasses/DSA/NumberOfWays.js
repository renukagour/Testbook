//only two direction right and down
function count(r,c){
    if(r==0 || c==0)
      return 1;
    return count(r-1,c)+count(r,c-1);
}
let n=3;
let m=3;
console.log(count(n-1,m-1));
n=3;
m=2;
console.log(count(n-1,m-1));
n=4;
m=4;
console.log(count(n-1,m-1));




















