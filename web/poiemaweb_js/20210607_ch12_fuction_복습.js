// 1. 함수 정의

/*
    함수를 정의하는 방식은 3가지가 있다.

     - 함수 선언문
     - 함수 표현식
     - Function 생성자 함수
*/

// 1-1 함수 선언문

function square(num){
    return num* num;
}

//1-2. 함수 표현식.

/*
 * 함수는 일급 객체로서 다음과 같은 특징이 있다.
===================================================
 *
 * 무명의 리터럴로 표현이 가능하다.
 * 변수나 자료 구조(객체, 배열…)에 저장할 수 있다.
 * 함수의 파라미터로 전달할 수 있다.
 * 반환값(return value)으로 사용할 수 있다.
 * 
 * ================================================
 * 
 * 함수를 익명/기명의 리터럴로 정의한 것을 함수 표현식(Function expression)이라 한다.
 */


// 익명 리터럴 -> 익명함수 (anonymous function)
var square = function(number){
    return number * number;
};

// 기명 리터럴 -> 기명 함수 (named function)

var foo = function multiply(a,b){
    return a* b;
};

// 익명 리터럴

var bar = function(a,b) {
    return a* b;
}

console.log(foo(1,2)); // 2
console.log(multipy(2,4)); // Uncaught ReferenceError:

// 함수는 일급 객체이기 때문에 변수에 할당할 수 있는데 이 변수는 함수명이 아니라
// 할당된 함수를 가리키는 참조값(address)을 저장하게 된다. => 함수 호출시 함수명이 아니라 
// 함수를 가리키는 변수명을 사용하여야 한다.

var foo = function (a, b) {
    return a * b;
};

var bar = foo;

console.log(foo(10, 10)); // 100
console.log(bar(10, 10)); // 100

  /*
    foo ->| 동일     |
    bar ->| 익명 함수|

    함수가 할당된 변수를 사용해 함수를 호출하지 않고 기명 함수의 함수명을 사용해 호출하게 되면 
    에러가 발생한다. 이는 함수 표현식에서 사용한 함수명은 외부 코드에서 접근 불가능하기 때문이다. 
    (사실은 함수 선언문의 경우도 마찬가지이다.)

    함수 표현식과 함수 선언문에서 사용한 함수명은 함수 몸체에서 자신을 재귀적 호출(Recursive function call)
    하거나 자바스크립트 디버거가 해당 함수를 구분할 수 있는 식별자의 역할을 한다.

    함수 선언문으로 정의한 함수 square의 경우, 함수명으로 호출할 수 있었는데 이는 자바스크립트 엔진에 의해 
    아래와 같은 함수 표현식으로 형태가 변경되었기 때문이다.
  */

    var square = function square(number) {
        return number * number;
    };


/*
    함수명과 함수 참조값을 가진 변수명이 일치하므로 함수명으로 호출되는 듯 보이지만
    사실은 변수명으로 호출된 것이다.

    결국 함수 선언문도 함수 표현식과 동일하게 함수 리터럴 방식으로 정의되는 것이다.
*/

// 1.3 Function 생성자 함수
/**
 * 함수 표현식으로 함수를 정의할 때 함수 리터럴 방식을 사용한다. 함수 선언문도 내부적으로 
 * 자바스크립트 엔진이 기명 함수 표현식으로 변환하므로 결국 함수 리터럴 방식을 사용한다.

 * 따라서 함수 선언문과 함수 표현식은 모두 함수 리터럴 방식으로 함수를 정의하는데 이것은 
 * 결국 내장 함수 Function 생성자 함수로 함수를 생성하는 것을 단순화시킨 short-hand(축약법)이다.
 * 
 */


// Syntax
// new Function(arg1, arg2, arg3, ... argN, functionBody)

var square = new Function("number", "return number * number"); // 문자열로 인자를 넣네.
console.log(square(10)); // 100 

// 2. 함수 호이스팅.


// 4. Call by Reference

/**
 * 하지만 객체형 인수는 참조값을 매개변수에 전달하기 때문에 함수 몸체에서 그 값을 변경할 경우 원본 객체가 
 * 변경되는 부수 효과(side-effect)가 발생한다. 
 * 이와 같이 부수 효과를 발생시키는 비순수 함수(Impure function)는 복잡성을 증가시킨다. 
 * 비순수 함수를 최대한 줄이는 것은 부수 효과를 최대한 억제하는 것과 같다. 이것은 디버깅을 쉽게 만든다.
 * 어떤 외부 상태도 변경하지 않는 함수를 순수함수(Pure function), 외부 상태도 변경시켜는 
 * 부수 효과(side-effect)가 발생시키는 함수를 비순수 함수(Impure function)라 한다.
 */







