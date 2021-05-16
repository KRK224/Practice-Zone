/* 
    클래스의 멤버 변수
    객체의 프로퍼티
*/

// 멤버 변수

// 생성자를 통한 변수 설정.

class A {
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
}

console.log(new A("chris", 29));

// class 선언시 멤버 변수(프로퍼티) 설정

class B{
    name;
    age;
}

console.log(new B());

class C {
    _name = "no name";
    _age = 0;

    constructor(name, age){
        this._name = name;
        this._age = age;
    }
}

console.log(new C("Mark", 37));
