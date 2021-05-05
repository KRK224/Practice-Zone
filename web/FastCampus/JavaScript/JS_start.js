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

