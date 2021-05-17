/*
    생성자를 통해서 프로미스 객체를 만드는 순간 Pending (대기) 상태라고 합니다.
*/

new Promise((resolve, reject)=> {}); // Pending 상태

/*
    executor 함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled (이행) 상태가 됩니다.
*/

new Promise((resolve, reject)=> {
    // Pending 상태.

    // 명령 실행

    resolve(); // fulfilled 상태

})

/*
    executor 함수 인자 중 하나인 reject 함수를 실행하면, rejected (거부) 상태가 됩니다.
*/

new Promise((resolve,reject) => {
    reject(); // rejected 상태

})