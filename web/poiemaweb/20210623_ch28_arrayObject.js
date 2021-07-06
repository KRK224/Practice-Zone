/*
 * 배열(array)은 1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용한다. 
 * 자바스크립트의 배열은 객체이며 유용한 내장 메소드를 포함하고 있다.
 * 배열은 Array 생성자로 생성된 Array 타입의 객체이며 프로토타입 객체는 Array.prototype이다.
*/


// 1.1 배열 리터럴

/*
 * 0개 이상의 값을 쉼표로 구분하여 대괄호([])로 묶는다.
 *
*/

const emptyArry = [];

console.log(typeof emptyArry);
console.log(emptyArry.length); // 0
console.log(emptyArry[0]);  // undefined.

const arry = [
    'zero', 'one', 'two', 'three'
];

for (var index of arry){
    console.log(arry[index]);
}


const items = [1, 4];

// items[1]부터 0개의 요소를 제거하고 그자리(items[1])에 새로운 배열를 추가한다. 제거된 요소가 반환된다.
// items.splice(1, 0, [2, 3]); // [ 1, [ 2, 3 ], 4 ]
Array.prototype.splice.apply(items, [1, 0].concat([2, 3]));
// ES6
// items.splice(1, 0, ...[2, 3]);

console.log(items); // [ 1, 2, 3, 4 ]
