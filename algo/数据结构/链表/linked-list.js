// 单向链表
class Node {
  constructor(value) {
    this.value = value;
    this.next = undefined;
  }
}

class LinkedList {
  #count = 0;
  #head = undefined;
  // 根据位置获取值
  getValue(index){
    if (index < 0 || index > this.#count - 1) {
      return undefined;
    }
    let current = this.#head;
    for(let i = 0 ; i < index && current != undefined;i++){
      current = current.next;
    }
    return current;
  }
  push(value){
    const node = new Node(value);
    if (this.#count === 0) {
      this.#head = node;
    } else {
      const current = this.getValue(this.#count - 1);
      current.next = node;
    }
    this.#count++;
    return node;
  }
  insertBefore(value, index){
    const node = new Node(value);
    if (index < 0 || index > this.#count){
      return undefined;
    }
    if (index === 0) {
      const current = this.#head;
      this.#head = node;
      node.next = current;
    }  else {
      const previous = this.getValue(index - 1);
      const current = previous.next;
      previous.next = node;
      node.next = current;
    }
    this.#count++;
    return node;
  }
  
  isEmpty(){
    
  }
  clear(){
    
  }
  size(){
    
  }
}
var i = new LinkedList();
