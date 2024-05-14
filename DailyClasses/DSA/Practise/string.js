var names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
var namestr = names.join();
console.log(namestr); // David,Cynthia,Raymond,Clayton,Mike,Jennifer
namestr = names.toString();
console.log(namestr); // David,Cynthia,Raymond,Clayton,Mike,Jennifer


console.log('Red Dragon'.indexOf('Red') )// returns 0
console.log('Red Dragon'.indexOf('RedScale')); // returns -1
console.log('Red Dragon'.indexOf('Dragon', 0)); // returns 4
console.log('Red Dragon'.indexOf('Dragon', 4)); // returns 4
console.log('Red Dragon'.indexOf("", 9)); // returns 9


var str = "He's my king from this day until his last day";
var count = 0;
var pos = str.indexOf('a');
while (pos !==-1) {
count++;
pos = str.indexOf('a', (pos + 1));
}
console.log (count); // prints '3'


var test1 = 'chicken,noodle,soup,broth';
console.log(test1.split(",")); // ["chicken", "noodle", "soup", "broth"]
var test1 = 'chicken';
console.log(test1.split("")); // ["c", "h", "i", "c", "k", "e", "n"]