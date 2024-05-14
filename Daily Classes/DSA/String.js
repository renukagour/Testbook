// String are immutable -> once it it created cannot modify
// let s = "Hello";
// console.log(s); //s->Hello

// but new string can be created
// s = "Helly";
// console.log(s); //s->Helly

// Template literal
// let name = "renu";
// let greeting = `Hello ${name}`;
// console.log(greeting);

// string property
// console.log(greeting.length);

// String methods
// charAt indexOf lastIndexof replace substring toUppercase toLowerCase concat split trim

// let s="Hello";
// let n=s.length;
// for (let i = 0; i < n; i++) {
//   console.log(s[i]);
//   console.log(s.charAt(i));
    
// }
// console.log(s.charAt(10)); //space
// console.log(s.indexOf("e"));
// console.log(s.indexOf("l")); //2
// console.log(s.indexOf("j")); //-1
// console.log(s.lastIndexOf("l")); //3
// let s2=s.replace('ell','ipp');

// console.log(s2,s);

// let s="Testbook";
// let s1=s.substring(0,4); //4 excluded
// let s1=s.substring(4); 
// console.log(s1);


let s="  Hello, I am Renu   ";
let s1= s.trim(); //remove leading and trailling spaces 
console.log(s1);
console.log(s.length);
console.log(s1.length);

let a="apple , banaana, Mango";
let fruits=a.split(',');
console.log(a);
console.log(fruits);

let stu="renu rohit gladden";
let Student=stu.split(' ');
console.log(stu);
console.log(Student);