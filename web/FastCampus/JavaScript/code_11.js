let whatever = "Mark";

whatever = 37;

console.log("중간에 변수의 타입이 변해도 문제없다. => 동적 타이핑")

// 기본형 - Boolean.


const isTrue = true;
const isFalse = false;

console.log(isTrue, typeof isTrue);
console.log(isFalse, typeof isFalse);


// 객체 생성.
const a = new Boolean(false);

console.log(a, typeof a);

if (a) { // 객체 안의 값은 False지만, 객체 자체는 True로 인식.
    console.log("false?")
}

// Null (type), null (value)

const n = null;

console.log(n, typeof n);

// Null의 타입은 Object이다.

let b;

console.log(b, typeof b);

// undefined의 타입은 undefined 이다.

// undefined와 Null의 비교

/*
    ==으로 비교는 True 반환

    === 비교는 False. (type까지 비교)
*/

if ( n == b){
    console.log(n == b);
}

if (n === b){
    console.log(n === b);
}

// Number

const num1 = 37;

console.log(num1, typeof num1);

const num2 = 96.7;

console.log(num2, typeof num2);


// NaN의 타입은 Number이지만, 숫자가 아님을 의미.

const c = NaN;

console.log(c, typeof c);

const d = Number("Mark");

console.log(d, typeof d);

//String

//template String (ES6에 도입됨)

const e = "Hello"

const f = `${e} World!` // ${변수}

console.log(f, typeof f);


// Symbol : 같은 값이라도 고유 취급하고 싶을 때 사용.

// new로 생성 불가!!!

const a1 = Symbol();
const b1 = Symbol(37);
const c1 = Symbol('Mark');
const d1 = Symbol('Mark');

console.log(c1 == d1); // false
console.log(c1, typeof c1);

