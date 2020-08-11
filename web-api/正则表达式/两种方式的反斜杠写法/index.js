// 匹配\
const str_1 = '\\';
const r1_1 = /\\/;
const r1_2 = new RegExp('\\\\');

console.log(str_1.match(r1_1));
console.log(str_1.match(r1_2));

// 匹配\.
const str_2 = '\\.';
const r2_1 = /\\\./;
const r2_2 = new RegExp('\\\\.');

console.log(str_2.match(r2_1));
console.log(str_2.match(r2_2));

// 匹配\和任意字符
const str_3_1 = '\\.';
const str_3_2 = '\\h';
const r3_1 = /\\./;
const r3_2 = new RegExp('\\\\\.');

console.log(str_3_1.match(r3_1));
console.log(str_3_2.match(r3_2));
console.log(str_3_1.match(r3_1));
console.log(str_3_2.match(r3_2));



