/* 생성자 
    constructor
    class의 생성자(인자를 데이터로 넣을 수 있는 기능)에 대해 알아보자.
*/

// constructor

class A{};

console.log(new A());

class B {
    constructor() {
        console.log("constructor");
    }
}

console.log(new B());

class C {
    constructor(name, age){
        console.log('Constructor', name, age);
    }
}

console.log(new C("Mark", 37));