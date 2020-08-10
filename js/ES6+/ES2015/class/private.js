// es6私有属性
class PrivateClass {
  #value = 5;
  getValue(){
    return this.#value;
  }
  setValue(v){
    return this.#value = v;
  }
}
// 传统闭包方式-占用内存
const LikePrivateClass= (function(){
  let value = 5
  return class LikePrivateClass{ 
    getValue(){
      return value;
    }
    setValue(v){
      return value = v;
    }
  }
}())
// 弱引用闭包
const WeakPrivateClass= (function(){
  let weak = new WeakMap();
  return class WeakPrivateClass{ 
    constructor(){
      weak.set(this, 5);
    }
    getValue(){
      return weak.get(this);
    }
    setValue(v){
      weak.set(this, v);
      return weak.get(this);
    }
  }
}())
const item1 = new PrivateClass();
const item2 = new LikePrivateClass();
const item3 = new WeakPrivateClass();
console.log(item1, item1.value, item1.getValue(), item1. setValue(10));
console.log(item2, item2.value, item2.getValue(), item2.setValue(10));
console.log(item3, item3.value, item3.getValue(), item3.setValue(10));