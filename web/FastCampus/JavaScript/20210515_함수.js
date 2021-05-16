// function
// 이름이 hello1 인 함수를 선언
// 함수도 결국 객체이며, 자세히는 표준 내장 객체이다.

function hello1() {
    console.log("hello1");
}

console.log(hello1, typeof hello1);

// 함수의 매개변수
// 함수를 호출할 때 값을 지정

function hello2(name) {
    console.log("hello2", name);
}

hello2("chris")
//함수의 리턴
//함수를 실행하면 얻어지는 값

function hello3(name){
    return `hello3 ${name}`;
    
    //${} template literal : 표현식 삽입(expression imterpolation)으로 읽기 쉬운 문자을을 만들 수 있다.
    // 1 옆의 `문자 사용, + 사용하지 않고 변수와 문자열을 연결하여 문자열로 반환.
}

console.log(hello3("Mark"));

//=================================================================================

/*
    const hello = function(){}

    함수 이름을 바로 명시하는 것이 아니라 function keyword를 사용해서 만듬.
    function: 함수를 만들 때 사용하는 키워드

    => 함수 표현식(Function Expressions) / 익명 함수 사용이라고도 함.

*/

const hello4 = function(){
    console.log("function keyword로 만든 hello4");
}

hello4();

const hello5 = function(name){
    console.log("hello5", name);
}

hello5("Julie");

/* 
    선언적 function : hello1(){}

    익명 함수를 만들고 변수에 할당 : const hello = function() {}

    // 함수 자체를 저장하고 싶지 않을 때 사용함. => 함수를 즉시실행하고 싶을 때, 변수로 사용함.

    즉시 실행 함수

    var sum = (function(a,b){
        var sum = a+b;
        return sum;
    })(1,2);
*/


