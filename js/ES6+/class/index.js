class Father {
  constructor(props = {job: '服务员'}){
    this.name = '父亲';
    this.job = props.job;
  }
  printName() {
    console.log(this.name, this.job);
  }
}

class Child extends Father {
  constructor(props = {}) {
    super(props);
    this.name = props.name;
  }
}

const p0 = new Father();
const p1 = new Child({name: '儿媳'})
const p2 = new Child({name: '儿字', job: '程序员'});
p0.printName();
p1.printName();
p2.printName();