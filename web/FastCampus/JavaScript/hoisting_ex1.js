// 함수 정의 먼저

function hello1(){
    console.log("hello1");
}

hello1();

// 함수 호출 먼저

hello2();

function hello2(){
    console.log("hello2");
}

// 문제 없슴!

// example2.js 변수도 가능한 Hoisting
console.log("Hoisting Example2");

age = 6;
age++;
console.log("age 먼저 호출한 값 : " + age);

var age = 5;

//example3.js

console.log('\n Hoisting이 선언만을 가져온다는 것을 보여주는 예시')

console.log(name);

name = "Mark";

console.log(name);

var name = "Chris";

// 아래에서 할당을 해준다고 해도, 위로는 선언만이 올라가고, 할당은 맨 마지막에 남는다!!!

/*
    var name; // 선언만 올라가고,
    console.log(name);
    name = "Mark";
    console.log(name);
    name = "Chris"; // 할당은 남는다.

    와 동일 => var 변수 형의 문제점!!

*/


//===============================================

// let을 사용할 때의 Hoisting은??

/* 
    아예 에러 처리됨 => Hoisting 문제 해결됨.

    console.log('letName');

    letName = "KKR";

    console.log(letName);

    let letName;

*/

