let s = "Hello";
let rev = "";
let n = s.length;

for (let i = n - 1; i >= 0; i--) {
    rev = rev + s[i];
}
console.log(rev)