/**
 *  함수 호출과 this 바인딩
 * 
 *
 * 
 */  

// 1. 일반 함수 호출


// in browser console
// this === window; // true

// in Terminal
this === global // true

/**
 *  전역객체는 전역 스코프를 갖는 전역변수를 프로퍼티로 소유한다.
 *  전역 스코프에서 선언된 일반 함수는 전역객체의 메소드로 등록.
 * 
 */

var ga = "Global variable";

console.log(ga);
console.log(global.ga);

function foo(){
    console.log("invoked!");
}

// global.foo(); => 알 수 없는 에러

// 기본적으로 일반 함수 호출 시에 this는 전역 객체(Global Object)에
// 바인딩된다. 전역함수는 물론이고 심지어 내부함수의 경우도 this는
// 외부함수가 아닌 전역객체에 바인딩된다.


 // 1-1 일반 함수의 내부 함수

 function foo() {
     console.log("foo's this: ", this); // window or global

     function bar(){
         console.log("bar's this: ", this); // window or global
     }
     bar();
 }

 foo();

 var value = 1;

 var obj = {
     value: 100,
     foo: function(){
         console.log("foo's this: ", this); // obj
         console.log("foo's this.value: ", this.value); // obj.value = 100;
         function bar(){
             console.log("bar's this: ", this); // global
             console.log("bar's this.value: ", this.value); // global.value = 1;
         }
         bar();         
     }
 }

 obj.foo();


// 내부함수가 일반, 메소드, 콜백 함수 어디든 사용되던지 항상 global 객체에 바인딩 됨!

// 이를 회피하는 방법은 메소드 안에서 this를 프로퍼티로 저장하여 사용.






