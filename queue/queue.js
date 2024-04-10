// class Queue {
//   constructor() {
//     this.storage = {};
//     this.front = 0; // 큐의 가장 앞을 가리키는 Number 포인터
//     this.rear = 0; // 큐의 가장 뒤 가리키는 Number 포인터
//   }

//   size() {
//     return this.rear - this.front;
//   }

//   // 큐에 데이터를 추가
//   enqueue(element) {
//     this.storage[this.rear] = element;
//     this.rear += 1;
//   }

//   // 가장 먼저 추가된 데이터가 가장 먼저 추출
//   dequeue() {
//     // 빈 큐에 dequeue 연산을 적용해도 에러가 발생하지 않도록
//     if (this.size() <= 0) {
//       return;
//     }

//     const result = this.storage[this.front];
//     delete this.storage[this.front];
//     this.front += 1;

//     return result;
//   }
// }

// // const array = new Array() 미리 정의된 Array 객체를 사용합니다.
// const queue = [];

// queue.push(1); // [1]
// queue.push(2); // [1, 2]
// queue.push(3); // [1, 2, 3]
// queue.push(4); // [1, 2, 3, 4]
// queue.push(5); // [1, 2, 3, 4, 5]

// console.log(queue); // [1, 2, 3, 4, 5]

// queue.shift(); // [2, 3, 4, 5]
// queue.shift(); // [3, 4, 5]

// console.log(queue); // [3, 4, 5]

// const a = [1, 2, 3, 4];
// for (let i = 3; i >= 0; i--) {
//   console.log(a[i]);
//   console.log(a.length);
// }

// geeks for geek
class Queue {
  constructor() {
    this.items = [];
    this.frontIndex = 0;
    this.backIndex = 0;
  }
  size() {
    return this.backIndex - this.frontIndex;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  enqueue(item) {
    this.items[this.backIndex] = item;
    this.backIndex++;
    return item + " inserted";
  }
  dequeue() {
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }
  peek() {
    return this.items[this.frontIndex];
  }
  get printQueue() {
    return this.items;
  }
}

const que = new Queue();

let loops = 10;
for (let i = loops; i > 0; i--) {
  que.enqueue(i);
}
//console.log(que.printQueue);

let k = 4;

function reverseK(queue, k) {
  for (let i = 0; i < k; i++) {
    let x = queue.items[i];
    queue.items[i] = queue.items[k];
    queue.items[k] = x;
    k--;
  }

  console.log(queue.printQueue);
}

reverseK(que, k);
