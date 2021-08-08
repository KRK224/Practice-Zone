// ES5
var arr1 = [1, 2, 3, 6];
var arr2 = [4, 5];

/*
apply 메소드의 2번째 인자는 배열. 이것은 개별 인자로 splice 메소드에 전달된다.
[3, 0].concat(arr2) → [3, 0, 4, 5]
arr1.splice(3, 0, 4, 5) → arr1[3]부터 0개의 요소를 제거하고 그자리(arr1[3])에 새로운 요소(4, 5)를 추가한다.
*/
Array.prototype.splice.apply(arr1, [3, 0].concat(arr2));

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]

arr1.splice(...([3, 0 ].concat(arr2)))

console.log(arr1);

const [one, two, three, six] = arr1;

console.log(one);

const obj = {prop1: "a", prop2: "b"};

const {prop1 : p1, prop2: p2} = obj;

console.log(p1, p2);
// console.log(prop1, prop2); 변수를 객체형태로 명시했을 시에는 프로퍼티 키는 변수로서 저장되지 않는다.

// 이 경우에는 prop1, prop2 값을 변수로 등록하고, 그 값으로 obj의 프로퍼티 값으로 저장.
const {prop1, prop2} = obj;

console.log(prop1, prop2);

