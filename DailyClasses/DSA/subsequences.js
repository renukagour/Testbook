function generate (s,seq,i){
 if(i==s.length){
    console.log(seq);
    return ;
 }
 generate (s,seq+s[i],i+1);
 generate (s,seq,i+1);
}
let s="abcd";
generate(s,"",0);
