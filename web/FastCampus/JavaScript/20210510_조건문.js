/* 
    거의 c/c++ 이랑 비슷.

    if (표현식) {
        표현식이 참으로 평가될 때, 실행되는 명령.
    }
*/

if (true){
    console.log("항상 실행");
}

if(false) {
    console.log("항상 실행되지 않음");
    
}

/*
    블록에 코드가 한줄이면, 중괄호 {} 는 생략 가능.
*/

if(true) console.log("항상 실행");

if(false) console.log("항상 실행되지 않음");


/*
    Falsy: 표현식이 거짓으로 평가되는 값들.

    false, 0, "", null, undefined, NaN


    Truethy: true, 37, "Mark", {}, []
*/

if(false) console.log(false);
if(0) console.log(false);
if("") console.log("");
if(null) console.log(null);
if(NaN) console.log(NaN);


if(true) console.log(true);
if(37) console.log(37);
if(-37) console.log(-37);
if("Mark") console.log("Mark");
if({}) console.log({});
if([]) console.log([]);

let n = 1;

if (n > 0) console.log("0보다 크다");
else if (n < 0 ) console.log("0보다 작다");
else console.log("0이다.")

let m = '0';
if (m == 0) {
    console.log("문자든 숫자든 == 이면 0으로 같다.")
}

/*
    조건식을 변수에 넣을 수 있다...
*/


const cond = n%3 === 0;

console.log(cond);




//===============================

//단축 평가 논리 계산식

/* 
    && 는 반드시 둘다 참일 때 참. => JavaScript는 이를 이용하여,

    전 표현식(조건식) 참 && 후 표현식 (실행) => 후참 (표현식) 출력

        if(전참){
            후참(표현식) 
        } 과 같은 효과!


    전 표현식(조건식) 거짓 && 후 표현식 => 뒤 표현식까지 가지 않음.

    if (전거짓){
        후 표현식
    }

    앞의 표현식이 참일 때만 뒤의 표현식이 출력 되게 만듬.

    return money && buy
    
    돈 있으면 삼
*/

let x = 6;

x % 3 ===0 && console.log("3의 배수");

x % 5 ===0 && console.log("nothing to do");


/* 
    || or 연산자 

    앞이 참이면 뒤 조건은 중요하지 않다.

    => 자바스크립트는 이를 이용하여,

    전 표현식(조건식) (참) || 후 표현식 (실행되지 않음) => 전 표현식만 실행.

    전 표현식(조건식) (거짓) || 후 표현식 (실행)

    즉, 앞의 값이 거짓일 때 대체제를 뒤에 표시.

    return rice || cake;

    쌀이 없음 케익.
*/

x % 5 == 0 || console.log("5의 배수가 아님.")

// 즉 &&은 앞이 참이면 실행.

// ||은 앞이 거짓이면 실행.

//=======================================================


/*
    삼항연산자

    조건문 ? 참 실행문 : 거짓 실행문

*/


const message = x % 5 ==0 ? "5의 배수" : "5의 배수 아님";

console.log(message);

//==========================================================

/* 
    switch문

    switch (변수) {
        default:
            console.log("디폴트 문");
    }
    switch (변수) {

        case a:
        case b:
        case c:
            console.log("a, b, c 셋 중 하나라면, 걸려서 아래로 쭉 떨어진다. fall through");
            break;
        case d:
            console.log("d일때 출력");
        case e:
            console.log("d, e일 때 출력")
    }
*/

