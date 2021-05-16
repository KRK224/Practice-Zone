//super

class Parent{
    name;
    constructor(name){
        this.name = name;
    }
    hello(){
        console.log("hello", this.name);
    }
}

class Child extends Parent {
    age;
    constructor(name, age){
        super(name);
        this.age = age;
    }

    hello(){
        // super.hello(); 부모 함수도 사용 가능.
        console.log("hello", this.name, this.age);
    }
}

const p = new Parent("Mark");
const c = new Child("Mark", 14);

console.log(p, c);

p.hello();
c.hello();


