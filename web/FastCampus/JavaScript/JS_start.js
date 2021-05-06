console.log('Hello World')

// 한 줄 주석 처리

/*
    여러 줄 주석 처리;

    C/C++과 동일하게 쓰네.
*/

// 08 변수와 상수

// 상수는 선언과 동시에 값을 할당해야 한다.
const sum = 3+5;

// 변수는 let 키워드를 사용하여 할당.

let result = false;

if (sum % 3 === 0 ){
    console.log('야호3');
    result = true;
}

if (sum % 5 ===0){
    console.log("야호5");
    result = true;
}

console.log(result);

// 09장 변수의 유효 범위

/*
    09. Scope of Variable

    const, let 의 유효 범위 : 블록 Scope

    {} : 블록


*/

// 블럭

{
    //
    const name = "Mark";

    console.log(name);

}

//console.log(name) => 블록 밖에서 name 사용 시 에러 발생.


// 블록 밖에서 안으로 (ok)
let age = 37;

{
    age++;
    console.log(age);
}

console.log(age); // 문제 없음

// 중첩
{
    // console.log(age2) 에러 발생.

    {
        console.age;
        let age2 = 20;
    }
}


//------------------------------------------------------------

// var의 유효 범위 : 함수 스코프

/*
    ES5까지 사용하던 변수

    ES5 이후 부터는 let과 const 사용.

    function() {
        함수 선언 방법.
    }
*/


//==================================================================

// 10장 var 와 호이스팅

/*
 Hoisting : 아래의 선언(만)을 위에 끌어서 사용.

 즉 호출 먼저 하고, 선언을 나중에 해도 됨.

 함수 뿐만 아니라, 변수도 마찬가지.
*/

/* 11장 시작 => 11.js 본 코드
    let 변수는 따로 자료형을 선언하지 않는다. => 동적 타이핑 / dynamic typing.

    변수가 가지는 고정 타입은 없다. 하지만 타입이 없는 것이 아니다.

    1. 기본 타입
            Boolean
            Null
            Undefined
            Number
            String
            Symbol

    2. 객체 타입

*/