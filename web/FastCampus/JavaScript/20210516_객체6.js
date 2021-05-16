/*
    표준 내장 객체
*/

// 표준 내장 객체: Array

const a = new Array("red", "black", "white"); // 생성자 함수로 객체 생성
console.log(a, typeof a); // object type을 가지고 있음.
console.log(a instanceof Array);
console.log(a instanceof Object);

const b =["green", "yellow", "powderblue"]; // 객체 리터럴로 생성
console.log(b, typeof b);
console.log(b instanceof Array);
console.log(b instanceof Object);

// Array 자체가 객체로 지정함 => JavaScript 특징.
// 파이썬은 list 사용, C/C++은 그냥 메모리 잡고 사용.

// Array가 객체이기 때문에 prototype에 해당하는 내장 메소드를 사용할 수 있다.

console.log(b.slice(0,1));
console.log(Array.prototype.slice, Object.prototype.slice);

// prototype 체인 상에서 slice란 내장 메소드는 Array 객체에서 정의되었다.

