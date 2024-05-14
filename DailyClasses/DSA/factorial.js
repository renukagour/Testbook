function factorial(n){
    let fact=1;
    for(i=1;i<=n;i++){
        fact*=i;
    }
    return fact;
}

const fact=(n)=>{
    if(n==1)
     return 1;
    return n*fact(n-1);
}
let n=5;
console.log(factorial(n));
console.log(fact(n));