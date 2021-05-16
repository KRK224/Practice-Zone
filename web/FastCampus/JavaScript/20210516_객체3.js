// new Object() => Object()라는 내장 생성자 함수를 이용한 객체 생성(권장되진 않음)

const a = new Object();
console.log(a, typeof a);

const b = new Object(true);
console.log(b, typeof b);

const c = new Object({name: "Mark"}); // 객체 속성을 리터럴로 넣음.

//=====================================================================================

// 프로토타입 체인
// prototype.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function(){
        console.log("hello", this.name, this.age);
    }
}

const p =new Person("Mark", 37);

p.hello();
console.log(p.toString()); // result :[object Object]

//toString() 메서드는 Object에서 비롯된 모든 객체에 상속됩니다.
/* 
    이 메서드가 사용자 지정 개체에서 재정의되지 않으면 [object type]을 반환합니다.

    => Object.toString() => [object Object]
    => null.toString() => [object Null] 반환.
    => undefined.toString() => [object Undefined] 반환
    이런식이다.
*/
console.log("Prototype Test")
console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor);
console.log(Person.hello); // hello 메서드는 개체가 생성될 때 만들어짐 => undefined.
console.log(Person.prototype.hello); // prototype의 hello 메소드는 없음 => undefined.


Person.prototype.hello = function(){
    console.log(`Hello ${this.name}, ${this.age}`);
}

console.log(Person.prototype.hello); // 이제는 정의 했기 때문에 Function이라는 결과가 나옴.

// =============================== Object 객체의 prototype
console.log("Object 객체 Prototype 작성");
console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);

console.log(p instanceof Person); // 둘다 true로 나옴.
console.log(p instanceof Object); // Object 객체에서 prototype 체인을 상속받아 Person을 생성했다.