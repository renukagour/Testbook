function fibo(n) {
    let x = 0, y = 1;
    for (let i = 2; i <= n; i++) {
        f = x + y;
        x = y;
        y = f;
    }
    return f;
}

// 
function fibonic(n1) {
if (n1==1) {
    return 1;
}
    return fibonic(n1 - 2) + fibonic(n1 - 1);
}

let n = 6;
console.log(fibo(n));
console.log(fibonic(6));