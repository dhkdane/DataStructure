/**  Javascript implementation of Deque using Node of a doubly linked list

Time Complexity : 
  Time complexity of operations like insertFront(), insertRear(), deleteFront(), deleteRear() is O(1). 
  The Time Complexity of erase() is O(n).
Auxiliary space: O(1)
*/
class Node {
  data = 0;
  prev = null;
  next = null;

  // Function to get a new node
  static getnode(data) {
    const newNode = new Node();
    newNode.data = data;
    newNode.prev = null;
    newNode.next = null;
    return newNode;
  }
}

// A structure to represent a deque
class Deque {
  front = null;
  rear = null;
  size = 0;

  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  // Function to check whether deque
  // is empty or not
  isEmpty() {
    return this.front === null;
  }

  // Function to return the number of
  // elements in the deque
  size() {
    return this.size;
  }

  // Function to insert an element
  // at the front end
  insertFront(data) {
    const newNode = Node.getnode(data);

    // If true then new element cannot be added
    // and it is an 'Overflow' condition
    if (newNode === null) {
      console.log("OverFlow\n");
    } else {
      // If deque is empty
      if (this.front === null) {
        this.rear = newNode;
        this.front = newNode;
      } else {
        newNode.next = this.front;
        this.front.prev = newNode;
        this.front = newNode;
      }

      // Increments count of elements by 1
      this.size += 1;
    }
  }

  // Function to insert an element
  // at the rear end
  insertRear(data) {
    const newNode = Node.getnode(data);

    // If true then new element cannot be added
    // and it is an 'Overflow' condition
    if (newNode === null) {
      console.log("OverFlow\n");
    } else {
      // If deque is empty
      if (this.rear === null) {
        this.front = newNode;
        this.rear = newNode;
      } else {
        newNode.prev = this.rear;
        this.rear.next = newNode;
        this.rear = newNode;
      }
      this.size += 1;
    }
  }

  // Function to delete the element
  // from the front end
  deleteFront() {
    // If deque is empty then
    // 'Underflow' condition
    if (this.isEmpty()) {
      console.log("UnderFlow\n");
    } else {
      const temp = this.front;
      this.front = this.front.next;

      // If only one element was present
      if (this.front === null) {
        this.rear = null;
      } else {
        this.front.prev = null;
      }

      // Decrements count of elements by 1
      this.size -= 1;
    }
  }
  deleteRear() {
    // If deque is empty then
    // 'Underflow' condition
    if (this.isEmpty()) {
      console.log("UnderFlow\n");
    } else {
      const temp = this.rear;
      this.rear = this.rear.prev;

      // If only one element was present
      if (this.rear === null) {
        this.front = null;
      } else {
        this.rear.next = null;
      }

      // Decrements count of elements by 1
      this.size -= 1;
    }
  }

  // Function to return the element
  // at the front end
  getFront() {
    // If deque is empty, then returns
    // garbage value
    if (this.isEmpty()) {
      return -1;
    }
    return this.front.data;
  }

  // Function to return the element
  // at the rear end
  getRear() {
    // If deque is empty, then returns
    // garbage value
    if (this.isEmpty()) {
      return -1;
    }
    return this.rear.data;
  }

  // Function to delete all the elements
  // from Deque
  erase() {
    this.rear = null;
    while (this.front !== null) {
      const temp = this.front;
      this.front = this.front.next;
    }
    this.size = 0;
  }
}

// Driver program to test the Deque class
function main() {
  // Create a Deque object
  const dq = new Deque();

  console.log("Insert element '5' at rear end");
  dq.insertRear(5);

  console.log("Insert element '10' at rear end");
  dq.insertRear(10);

  console.log(`Rear end element: ${dq.getRear()}`);

  dq.deleteRear();
  console.log(`After deleting rear element new rear is: ${dq.getRear()}`);

  console.log("Inserting element '15' at front end");
  dq.insertFront(15);

  console.log(`Front end element: ${dq.getFront()}`);

  console.log(`Number of elements in Deque: ${dq.size}`);

  dq.deleteFront();
  console.log(`After deleting front element new front is: ${dq.getFront()}`);
}

// Call the main function
main();
