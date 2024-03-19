class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Linkedlist {
  constructor(head = null) {
    this.head = head;
  }
}

// create an instance of the Linkedlist class
let list = new Linkedlist();


//
appendNode(newNode){
    let node = this.head;
    if(node==null){
        //Means it's just empty list
        this.head = newNode;
        return;
    }
    while (node.next) {
        node = node.next;
    }
    node.next = newNode;
}


//

let insertAtEnd = function(data){
  // A newNode object is created with property data and next=null
      
      let newNode = new Node(data);
  // When head = null i.e. the list is empty, then head itself will point to the newNode.
      if(!this.head){
          this.head = newNode;
          return this.head;
      }
  // Else, traverse the list to find the tail (the tail node will initially be pointing at null), and update the tail's next pointer.
     let tail = this.head;
     while(tail.next !== null){
          tail = tail.next;
     }
     tail.next = newNode;
     return this.head;
  }