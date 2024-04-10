/**Javascript program to implement a queue using an array
Time Complexity: 
  O(1) for Enqueue (element insertion in the queue) as we simply increment pointer and put value in array and
  O(N) for Dequeue (element removing from the queue) as we use for loop to implement that.
Auxiliary Space: 
  O(N), as here we are using an N size array for implementing Queue

*/
class Queue {
  constructor(c) {
    this.front = this.rear = 0;
    this.capacity = c;
    this.queue = new Array(this.capacity);
  }

  // Function to insert an element
  // at the rear of the queue
  queueEnqueue(data) {
    // Check queue is full or not
    if (this.capacity == this.rear) {
      document.write("<br>Queue is full<br>");
      return;
    }

    // insert element at the rear
    else {
      this.queue[this.rear] = data;
      this.rear++;
    }
    return;
  }

  // Function to delete an element
  // from the front of the queue
  queueDequeue() {
    // If queue is empty
    if (this.front == this.rear) {
      document.write("<br>Queue is empty<br>");
      return;
    }

    // Shift all the elements from index 2 till rear
    // to the right by one
    else {
      for (let i = 0; i < this.rear - 1; i++) {
        this.queue[i] = this.queue[i + 1];
      }

      // Store 0 at rear indicating there's no element
      if (this.rear < this.capacity) this.queue[this.rear] = 0;

      // Decrement rear
      this.rear--;
    }
    return;
  }

  // Print queue elements
  queueDisplay() {
    let i;
    if (this.front == this.rear) {
      document.write("<br>Queue is Empty<br>");
      return;
    }

    // Traverse front to rear and print elements
    for (i = this.front; i < this.rear; i++) {
      document.write(this.queue[i] + " <-- ");
    }
    return;
  }

  // Print front of queue
  queueFront() {
    if (this.front == this.rear) {
      document.write("<br>Queue is Empty<br>");
      return;
    }
    document.write("<br>Front Element is: " + this.queue[this.front]);
    return;
  }
}

// Driver code

// Create a queue of capacity 4
let q = new Queue(4);

// Print Queue elements
q.queueDisplay();

// Inserting elements in the queue
q.queueEnqueue(20);
q.queueEnqueue(30);
q.queueEnqueue(40);
q.queueEnqueue(50);

// Print Queue elements
q.queueDisplay();

// Insert element in the queue
q.queueEnqueue(60);

// Print Queue elements
q.queueDisplay();

q.queueDequeue();
q.queueDequeue();

// Print Queue elements
q.queueDisplay();

// Print front of the queue
q.queueFront();
