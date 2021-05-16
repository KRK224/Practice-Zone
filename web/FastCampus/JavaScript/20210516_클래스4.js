// 멤버 함수

class A {
    hello1(){
        console.log("hello1", this);
    }

    // 화살표 함수에서는 this를 인식 못했는데, class 안에서는 인식함.
    hello2 = ()=>{
        console.log("hello2", this)
    }
}

new A().hello1();
new A().hello2();

class B {
    name = "Mark";

    hello() {
        console.log("Hello,", this.name);
    }
}

new B().hello();

function F(){
    this.hello = ()=>{
        console.log("Hello,", this);
    }
}

let f = new F();

f.hello(); // hello의 this 가 [Function (anonymous)]로 나옴.


/*
    arrow function의 class와 생성자 함수로 객체 생성의 차이에 대해 공부 필요.
*/