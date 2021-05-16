// 함수, 클래스 (틀) => 객체, 개체, object 생성(instance)

// 1. 생성자 함수로 객체를 만들기.


function A() {}
const a = new A();
console.log(a, typeof a); // 객체를 의미.
console.log(A()); // 객체가 아닌 함수를 의미, return값이 없기 때문에 undefined로 찍힘.

// 생성자 함수에 인자로 데이터 넣기

function B(name, age){
    console.log(name, age);
}

const bc = new B(); // name, age 가 undefined로 설정
const b = new B("Chris", 29);
console.log(B());


