/*
 *  비 블록 레벨 스코프!

    if, while, for, switch 문 등의 블록 레벨 코드 내에서 선언된 변수들(var keyword) 또한 전역 변수로 작용!
 * 
 */

if(true){
    var x = 5;
}

console.log(x); // 5


/**
 * JS 는 함수 레벨 스코프
 * 
 */

var x = 'global';

function foo(){
    var x = "local";
    console.log(x); // "local"
}

foo(); // "local"
console.log(x); // "global"


// ====================================================== 내부함수.

var x = "global";

function foo(){
    var x ="local";
    console.log(x);

    function bar(){ // 내부 함수
        console.log(x); // ?? => 지역 변수 x를 먼저 참조.
    }

    bar();
}

foo();
console.log(x); // ? => global


var x = 10;

function foo() {
    x = 100; // 이때 여기서 x는 전역 변수.
    console.log(x); // 100
}

foo() // 마지막 함수가 hoisting에 의해... 100만 여러 번 찍힘;; ㅎㄷㄷ

console.log(x); // 100


