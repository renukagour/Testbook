// 1.
function printFibonacciNumbers(n) {
    let f1 = 0, f2 = 1, i;
    if (n < 1)
        return;
    console.log(f1 + " ");
    for (i = 1; i < n; i++) {
        console.log(f2 + " ");
        let next = f1 + f2;
        f1 = f2;
        f2 = next;
    }
}
printFibonacciNumbers(15);
// 2.
function evenProduct(n) {
    let even = 1;
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0)
            even *= i;
    }
    console.log("Even Numbers Product : " + even + "<br>");
}
let n = 7;
evenProduct(n);
// 3.
function countDigit(n) {
    let count = 0;
    while (n != 0) {
        n = Math.floor(n / 10);
        ++count;
    }
    return count;
}
n = 7163813;
console.log("Number of digits : " + countDigit(n));

// 4.
function sum_of_digit(n) {
    if (n == 0)
        return 0;
    return (n % 10 + sum_of_digit(parseInt(n / 10)));
}
var num = 12345;
var result = sum_of_digit(num);
console.log("Sum of digits in " + num + " is " + result);
// 5.
function reverse(str, len) {
    if (len == str.length) {
        return;
    }
    reverse(str, len + 1);
    console.log(str[len]);
}
let a = "RecurString";
reverse(a, 0);
// 6.
var exponent = function (a, n) {
    if (n === 0) {
        return 1;
    }
    else {
        return a * exponent(a, n - 1);
    }
};
console.log(exponent(5, 2))