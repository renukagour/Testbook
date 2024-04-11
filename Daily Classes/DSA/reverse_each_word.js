function reverse(s) {
    let rev = "";
    let n = s.length;

    for (let i = n - 1; i >= 0; i--) {
        rev = rev + s[i];
    }
    return rev
}
let s = "open the tap";
let word = "";
let ans = "";
let n = s.length;
for (i = 0; i < n; i++) {
    if (s[i] == " ") {//reverse the word 
        // and add it to ans withspace 
        ans += reverse(word);
        ans += " ";
        word = ""
    }
    else {
        word += s[i];
    }
}
//do not reverse last
ans += reverse(word); //for last word
console.log(ans);