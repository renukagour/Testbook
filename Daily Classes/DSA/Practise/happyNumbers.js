function happy_number(num) {
    var m, n;
    var c = [];
    while (num != 1 && c[num] !== true)
        
    {
        c[num] = true;
        m = 0;
        while (num > 0) {
            n = num % 10;
            m += n * n;
            num = (num - n) / 10;
        }
        num = m;
    }
    return (num == 1);
}
var n = 5, temp = n; // n numbers
var num = 1;
var f5 = '';
while (n-- > 0) {
    while (!happy_number(num))
        num++;
    f5 = f5 + (num + ", ");
    num++;
}
console.log('First ' + temp + ' happy numbers are : ' + f5);