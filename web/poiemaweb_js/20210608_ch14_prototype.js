/**
 *  14.1 프로토타입 객체
 */

// 14.3 Constructor

function Person(name){
    this.name = name;
}

const per1 = new Person("Chris")

console.log(per1.__proto__ === Person.prototype);
console.log(per1.__proto__.constructor === Person);

// constructor 프로퍼티는 프로토타입 객체(생성자 함수의 prototype 프로퍼티)의 프로퍼티이다.
// constructor 프로퍼티는 인스턴스를 생성한 객체를 가리킨다. => 여기서는 생성자 함수 Person.

var obj = {
    option : "literal",
    type: "Object"
};

console.log(obj.__proto__.constructor); // 리터럴로 객체 생성시 constructor가 가리키는 객체는 Object


console.log(Person.__proto__.constructor) // Function 생성자 함수

/*
    5.14 - 4 Prototype Chain.

    특정 객체의 프로퍼티와 메소드를 접근했을 때, 존재하지 않는다면, [[Prototype]] 객체를 따라,

    부모의 프로퍼티와 메소드를 검색하는 것을 Prototype Chain이라 한다.

*/

var student = {
    name: "Kim",
    score: 100
};


// Object.prototype.hasOwnProperty()
console.log(student.hasOwnProperty("name")); // true;





