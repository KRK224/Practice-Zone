// 5.12 함수

/*
+ index
    1. 함수 선언문
    2. 함수 표현식
    3. Function 생성자 함수
 ====================================

 + 1. 함수 선언문 & 함수 표현식

 결국 함수 선언문 또한 함수 표현식과 동일하게 함수 리터럴 방식으로 정의된 것!!!!

*/


// 함수 선언문

function square(num){
    return num* num;
}

// 함수 표현식 = 함수는 일급 객체로서, 표현식에 사용가능

/*
    1. 무명의 리터럴로 표현 가능
    2. 변수나 자료 구조(배열, 객체)에 저장 할 수 있다.
    3. 함수의 파라미터로 전달 가능
    4. 반환값(return value)으로 사용 가능.
*/



// 기명 함수 표현식(named function expression)
var foo = function multiply(a, b) {
    return a * b;
  };
  
  // 익명 함수 표현식(anonymous function expression)
  var bar = function(a, b) {
    return a * b;
  };
  
  console.log(foo(10, 5)); // 50
  console.log(multiply(10, 5)); // Uncaught ReferenceError: multiply is not defined

// 이때 함수 표현식에 사용된 이름(기명 함수)으로 함수에 접근할 수 없다. (함수 선언문도 마찬가지)
// 그 이름은 몸체에서 자신을 재귀적 호출을 하거나, 자바스크립트 디버거가 해당 함수를 구분할 수 있는 식별자 역할을 함.


// 함수 선언문도 사실은...

function declare(){
    return true;
}

var declare = function declare(){
    return true;
}

// 이와 같이 기명 함수의 이름과 할당할 변수의 이름이 같은 리터럴 방식으로 변수에 할당한 것.
// 따라서 함수 선언 후, 호출할 때는 동일한 이름의 변수를 호출!!!

var foo = function (a, b) {
    return a * b;
};

var bar = foo;

console.log(foo(10, 10)); // 100
console.log(bar(10, 10)); // 100


  // 함수 또한 객체이기 때문에 변수 bar과 foo는 익명 함수의 참조값을 갖는다.


  /*
    근데 함수 선언문은 사실 함수 표현식(리터럴(표현식)을 변수에 할당)하는 것이었는데...
    함수 표현식은 또 내장 함수 Function 생성자 함수를 생성하는 것을 단순화 시킨 축약이란다...

  */


// var squre = new Function ('인자', "인자", "return fuction body");
// 잘 안씀...



