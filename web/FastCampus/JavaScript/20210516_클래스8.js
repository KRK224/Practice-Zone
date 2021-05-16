// 변수, 함수 추가 및 오버라이딩.

class Parent {
    name = "Lee";

    hello() {
        console.log("hello", this.name);
    }
}

class Child extends Parent {
    //name = "Lee"; 상속으로 인하여 자동으로 받음.
    age = 37;

    hello(){
        console.log("hello", this.name, this. age);
    }
}

const p = new Parent();
const c = new Child();

console.log(p, c);
c.hello();

// 클래스 상속시에 부모의 변수, 함수를 사용하고 싶을 때 Super를 사용.