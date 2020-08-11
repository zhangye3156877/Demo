class Queue {
  #item = {}
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
  pop(){
    if (this.isEmpty()){
      return undefined;
    }
    const result = this.#item[this.#count - 1];
    delete this.#item[--this.#count];
    return result;
  }
  peek(){
    if (this.isEmpty()){
      return undefined;
    }
    return this.#item[this.#count - 1];
  }
  isEmpty(){
    return this.#count === 0;
  }
  clear(){
    this.#item = {};
    this.#count = 0;
  }
  size(){
    return this.#count;
  }
}