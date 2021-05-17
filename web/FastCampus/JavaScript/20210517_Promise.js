/* 
    ES6 부터 JavaScript 의 표준 내장 객체로 Promise 추가.
    ES6 를 지원하는 브라우저나 Node.js 에서 전역에 있는 Promise를 확인할 수 있습니다.
*/

console.log(Promise);

/* 
    생성자를 통해서 프로미스 객체를 만들 수 있습니다.
    생성자의 인자로 executor 라는 함수를 이용합니다.
*/

new Promise(/* executor */);

/*
    executor 함수는 resolve 와 reject 를 인자로 가집니다.
    (resolve, reject) => {...}

    resolve와 reject 는 함수. (resolve(), reject())
*/

new Promise((resolve, reject) => {});