interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
}

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;

  constructor(private capacity: number) {};

  get size(){
    return this._size;
  }

  push(value: T){
    if(this.size === this.capacity){
      throw new Error('Stack is full!');
    }
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop() :T{ // null == undefined, null !== undefined
    if(this.head == null){
      throw new Error('Stack is empty!');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl<string>(10);
stack.push('Bill 1');
stack.push('Steve 2');
stack.push('Denis 3');
while(stack.size !== 0){
  console.log(stack.pop());
}

stack.pop();

const stack2 = new StackImpl<number>(10);
stack2.push(123);
stack2.push(456);
stack2.push(789);
while(stack2.size !== 0){
  console.log(stack2.pop());
}
