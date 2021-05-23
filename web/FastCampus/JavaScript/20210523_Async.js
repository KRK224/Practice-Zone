// Async- await 강의
// async function keyword 로 사용.

// Promise 객체를 리턴하는 함수

function p(ms) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(ms);
        }, ms)
    });
}

// Promise 객체를 이용해서 비동기 로직을 수행할 때

p(1000).then(ms =>{
    console.log(`${ms} ms 후에 실행된다.`);
})

// Promise 객체를 리턴하는 함수를 await 으로 호출하는 방법

const ms = await p(1000); // await 키워드를 사용하면 resolve 시의 인자 값을 리턴함.
// 하지만 에러... 그 이유는 await은 async function 에서 사용가능하다.

// 동기식 처리와 같이 다음 줄로 넘어가지 않는다.

console.log(`${ms} ms 후에 실행된다.`);
