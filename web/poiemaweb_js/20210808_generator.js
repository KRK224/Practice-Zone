function* gen(n) {
  let res;
  console.log('여기서는 undefined가 아닌가?'+res);
  res = yield n;    // n: 0 ⟸ gen 함수에 전달한 인수

  console.log('아직 0 아닌가?: '+res); // res: 1 ⟸ 두번째 next 호출 시 전달한 데이터
  res = yield res;

  console.log(res); // res: 2 ⟸ 세번째 next 호출 시 전달한 데이터
  res = yield res;

  console.log(res); // res: 3 ⟸ 네번째 next 호출 시 전달한 데이터
  return res;
}
const generatorObj = gen(0);

console.log(generatorObj.next());  // 제너레이터 함수 시작
console.log(generatorObj.next(1)); // 제너레이터 객체에 1 전달
console.log(generatorObj.next(2)); // 제너레이터 객체에 2 전달
console.log(generatorObj.next(3)); // 제너레이터 객체에 3 전달
/*
{ value: 0, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: true }
*/

const testGenerator = gen(0);

testGenerator.next();
testGenerator.next(1);
testGenerator.next(2);
testGenerator.next(3);
