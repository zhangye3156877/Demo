const bol:boolean = false;
const num:number = 0xfff;
const str:string = '字符串';
const nv:void = undefined;
const x:[number, number] = [1,1];
const xx: any[] = [1,2,3];
const xxx:Array<any> = [1,2,3];

enum Word{
  a,
  b = 5,
  c,
  d
}
function test():never{
  throw new Error('x');
}

let unv:any;
let arrg1:Array<any> = []

interface CarValue {
  color: string,
  cylinder?: number
}

function createcar(config: CarValue):{color: string, cylinder: number} {
  let info = {color: 'black', area: 'cn', cylinder: 0};
  if (config.color){
    info.color = config.color;
  }
  if(config.cylinder){
    info.cylinder = config.cylinder;
  }
  return info;
}

const c1 = createcar({color: 'red'});
const c2 = createcar({} as CarValue);

// console.log(c1, c2);

let a:number[] = [1,2,3,4];
let b:Array<number> = [2,3,4,5];
let c:ReadonlyArray<number> = a;
a[0] = 9;

// 抽象类
abstract class Test {
  // 子类必须实现的方法
  abstract move():void;
}
class Child extends Test{
  move(){
    console.log('子类move方法');
  };
}
class TestNormal {
  public name: string = 'zhang'

}
const instanceChild = new Child();
instanceChild.move();
const instanceTestNormal = new TestNormal();
//console.log(instanceTestNormal)

function test2(r:number, p = 'op'):string{
  return p
}

interface Direction {
  top: number
  right: number
  bottom: number
  left: number
}
// 重载
function assigned(all: number): Direction
function assigned(topAndBottom: number, leftAndRight: number): Direction
function assigned(top: number, right: number, bottom: number, left: number): Direction
function assigned (a: number, b?: number, c?: number, d?: any) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a
  } else if (c === undefined && d === undefined) {
    c = a
    d = b
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  }
}
assigned(3);

function cv1(x:number | string): number | string{
  if (typeof x === 'string'){
    return 1
  }
  return 'str'
}
const ecv1 = cv1(10);
const ecv2 = cv1('str');
// console.log(ecv1, ecv2);
function getArrayLength(arg:[]){
  console.log(arg)
}
type Foo = {
  kind: 'foo'; // 字面量类型
  foo: number;
};

type Bar = {
  kind: 'bar'; // 字面量类型
  bar: number;
};
interface Type3{
  kind: number,
  bar: 'x'
}
const tt3: Type3 = {
  kind: 6,
  bar: 'x'
}
console.log(tt3)
function doStuff(arg: Foo | Bar) {
  if (arg.kind === 'foo') {
    console.log(arg.foo); // ok
    //console.log(arg.bar); // Error
  } else {
    //console.log(arg.foo); // Error
    console.log(arg.bar); // ok
  }
}

class Animal {
  feet: number;
  constructor(name: string, numFeet: number) {
    this.feet = numFeet;
  }
}

class Size {
  feet: number;
  constructor(meters: number) {
    this.feet = meters;
  }
}

let aa: Animal;
let ss: Size;

aa = ss; // OK
ss = a; // OK
