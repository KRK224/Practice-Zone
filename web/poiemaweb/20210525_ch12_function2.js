// 1. 무명의 리터럴로 표현이 가능하다.
// 2. 변수나 자료 구조에 저장할 수 있다.
var increase = function (num) {
    return ++num;
  };
  
  var decrease = function (num) {
    return --num;
  };
  
  var predicates = { increase, decrease };
  
  // 3. 함수의 매개변수에 전달할 수 있다.
  // 4. 반환값으로 사용할 수 있다.
  function makeCounter(predicate) {
    num = 0;
  
    return function () {
      num = predicate(num);
      return num;
    };
  }
  
  var increaser = makeCounter(predicates.increase);
  console.log(increaser()); // 1
  console.log(increaser.num);
  console.log(increaser()); // 2
  console.log(typeof increaser);
  console.log(increaser.num);

  console.log(makeCounter === increaser);
  
  var decreaser = makeCounter(predicates.decrease);
  console.log(decreaser()); // -1
  console.log(decreaser()); // -2

  var foo = function (a, b) {
    return a * b;
};

var bar = foo;

console.log(foo(10, 10)); // 100
console.log(bar(10, 10)); // 100

console.log(foo === bar);