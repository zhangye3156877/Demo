// 双向队列
class DoubleQueue {
  #item = {};
  #count = 0;
  #head = 0;

  push(...value){
    if (value.length === 0){
      return 0
    }
    for(let i = 0; i < value.length; i++){
      this.#item[this.#count++] = value[i];
    }
    return value[value.length - 1];
  }
  unshift(...value){
    if (value.length === 0){
      return 0
    }
    if (this.size() === 0) {
      return this.push(...value);
    } else if (this.#head - value.length >= 0) {
      for(let i = 0; i < value.length; i++){
        this.#item[--this.#head] = value[i];
      }
      return value[value.length - 1];
    }
    const offset = value.length - this.#head;
    this.#count += offset;
    for(let i = this.#count - 1; i >= 0; i--){
      if (i < value.length) {
        this.#item[i] = value[i];
        continue;
      }
      this.#item[i] = this.#item[i - offset];
    }
    this.#head = 0;
    return value[value.length - 1];
  }
  shift(){
    if (this.isEmpty()){
      return undefined;
    }
    const result = this.#item[this.#head];
    delete this.#item[this.#head++];
    return result;
  }
  pop(){
    if (this.isEmpty()){
      return undefined;
    }
    const result = this.#item[this.#count - 1];
    delete this.#item[--this.#count];
    return result;
  }
  getFirst(){
    if (this.isEmpty()){
      return undefined;
    }
    return this.#item[this.#head];
  }
  getLast(){
    if (this.isEmpty()){
      return undefined;
    }
    return this.#item[this.#count - 1];
  }
  isEmpty(){
    return this.#count - this.#head === 0;
  }
  clear(){
    this.#item = {};
    this.#count = 0;
    this.#head = 0;
  }
  size(){
    return this.#count - this.#head;
  }
}