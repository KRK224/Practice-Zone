/* 
    JavaScript는 객체지향 프로그램을 지원하기 위해,

    Prototype이란 개념을 사용 => ES6부터 Class를 도입했지만 문법적으로만 달라졌을 뿐, 결국 함수인 기존 Prototype 패턴을 사용함

    syntactic sugar(문법적 설탕)이라나 뭐라나... ref. https://poiemaweb.com/js-object
*/

// 1) class - 선언적 방식

class A {}

console.log(new A());

// 2) class 표현식을 변수에 할당

const B = class {};

console.log(new B());

// 선언적 방식이지만 호이스팅이 일어나지 않는다.

new C();

class C {};
