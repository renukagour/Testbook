var middlenode=function (head){
    // find length
    let temp=head;
    let length=0;

    while(temp!=null){
        length++;
        temp=temp.next;

    }
    //reach the middle
    let mid=Math.floor(length/2);
    temp=head;
    for(let i=1;i<=mid;i++){
        temp =temp.next;
    }
    return temp;

}