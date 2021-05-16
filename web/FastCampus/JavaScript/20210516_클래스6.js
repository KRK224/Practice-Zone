// static 변수, 함수
// 인스턴스의 변수와 함수가 아닌 클래스의 변수, 함수

class A {
    static age = 37;
    static hello() {
        console.log(A.age);
    }
}

console.log(A, A.age);
A.hello();

class B {
    age = 37; //멤버 변수.
    static hello(){
        console.log(this.age);
    }
}

console.log(B,B.age); // B.age는 멤버 변수(인스턴스 변수)이므로 Undefined.
B.hello(); // hello static 함수는 실행되나, this.age는 Undefined.

// new B().hello(); // 인스턴스에서도 static 함수를 접근할 수 없다. error 발생.

class C {
    static name = "이 클래스의 이름은 C가 아니다"
}

console.log(C); // static name으로 class가 표현됨. [class C] 가 아니라, [class 이 클래스의 이름은 C가 아니다] 로 표시

