// 선언적 function과 익명 함수를 변수에 할당하는 방법의
// Hoisting test

hello1();

// 선언적 function의 경우, 미리 메모리에 할당하기 때문에 hoisting이 상관없음.

function hello1() {
    console.log("hello1");
}

/*
hello2();

const hello2 = function(){
    console.log("hello2");
    // 상수 선언시 아예 변수를 찾을 수 없음
}

hello3();

var hello3 = function(){
    console.log("hello3 var로 선언 후 Hoisting test")
    // error : hello3 is not a function.
    // 선언은 인식하나 함수로 할당됨은 인식하지 못함.
}
*/

//===================================================================

/* 
    function은 결국 객체의 한 종류이기 때문에 new라는 생성자 함수로 생성 가능.
*/

// new Function (/*인자1, 인자2, 인자3, ..., 함수의 바디*/);

const sum = new Function('a', 'b', 'c', 'return a + b + c');

console.log(sum(1,2,3,));

/* 
    **** 익명 function 과 new Function의 차이점.
*/


global.a = 0;

{
    const a = 1;
    const test = new Function('return a');

    console.log(test()); // error: {} scope level의 a를 인식하지 못함.

    //but global 변수는 인식하여 가져올 수 있음.
}

{

    const a = 2;
    const test = function() {
        return a;
    }

    console.log(test());

    // 익명 함수를 변수에 할당하면, scope내의 변수 인식.

}


