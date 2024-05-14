let q=[];

q.push(5);
q.push(7);
q.shift();
// front - frst element of q;
console.log(q[0]); //7
q.push(9);
console.log(q[0]); //7
q.shift();
q.shift();
console.log(q[0]); //-1 empty
q.push(8);
console.log(q[0]); //8
