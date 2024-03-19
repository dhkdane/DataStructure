class Stack {
  constructor() {
    this.storage = {};
    this.top = 0; // 스택의 가장 상단을 가리키는 포인터 변수를 초기화
  }

  // 스택의 사이즈(크기) 반환
  size() {
    return this.top;
  }

  // 스택에 데이터를 추가
  push(element) {
    this.storage[this.top] = element;
    this.top += 1;
  }

  // 가장 나중에 추가된 데이터가 가장 먼저 추출
  pop() {
    // 빈 스택에 pop 연산을 적용해도 에러가 발생하지 않도록
    if (this.size() <= 0) {
      return;
    }

    const result = this.storage[this.top - 1];
    delete this.storage[this.top - 1];
    this.top -= 1;

    return result;
  }
}

// const array = new Array() 미리 정의된 Array 객체를 사용합니다.
const stack = [];

stack.push(1); // [1]
stack.push(2); // [1, 2]
stack.push(3); // [1, 2, 3]
stack.push(4); // [1, 2, 3, 4]
stack.push(5); // [1, 2, 3, 4, 5]

console.log(stack); // [1, 2, 3, 4, 5]

stack.pop(); // [1, 2, 3, 4]
stack.pop(); // [1, 2, 3]

console.log(stack); // [1, 2, 3]
