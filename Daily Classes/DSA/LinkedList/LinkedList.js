class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {

    constructor() {
        this.head = null;

    }
    insertAtHead(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    insertAtTail(value) {
        let newNode = new Node(value);

        //  check is linked list is empty
        if (this.head == null) {
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        //  temp has reached the last node
        temp.next = newNode;
    }
    deleteHead() {
        if (this.head == null){
            console.log("Linked list is empty can not delete");
            return;
        }
        
        this.head = this.head.next;

    }

    deleteTail() {
        //    if only head present then head become null or not any node present
        if (this.head.next == null || this.head == null) {
            this.head = null;
            return;
        }
        let temp = this.head;
        //reach the second last node
        while (temp.next.next != null) {

            temp = temp.next;
        }
        // temp is the second last node
        temp.next = null;
    }

    print() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    middle(){
        let temp=this.head;
    let length=0;

    while(temp!=null){
        length++;
        temp=temp.next;

    }
    //reach the middle
    let mid=Math.floor(length/2);
    temp=this.head;
    for(let i=1;i<=mid;i++){
        temp =temp.next;
    }
    return temp;
    }
}

let l1 = new LinkedList();
l1.insertAtTail(1);
l1.insertAtTail(2);
l1.insertAtTail(3);
// let a = new Node(5);

// console.log(l1);
// l1.print();
l1.insertAtHead(0);
l1.print();
// l1.deleteTail();
// l1.print();
// l1.deleteHead();
// l1.print();
console.log(l1.middle());