//with reversing

// function reverse(s) {
//     let rev = "";
//     let n = s.length;

//     for (let i = n - 1; i >= 0; i--) {
//         rev = rev + s[i];
//     }
//     return rev;
// }

// let s="madam";
// let rev=reverse(s);
// if(s=rev)
//  console.log("yes");
// else
//   console.log("no");

//without reversing
function Palindrome(str){
    let s=0;
    let e=n-1;
    while(s<e){
        if(str[s]!=str[e])
           return false;
        else{
            s++
            e--;
        }
        
    }
    return true;

}
let str="radar"
let n=str.length;
console.log(Palindrome(str));
