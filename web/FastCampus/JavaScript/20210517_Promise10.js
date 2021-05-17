/*
    보통 reject 함수를 실행하며 rejected 되는 이유를 넘기는데, 표준 내장 객체인 Error 의 생성자를 이용하여
    Error 객체를 만들어 넘긴다.
*/


function p(){
    return new Promise((resolve, reject)=>{
        /* pending */
        setTimeout(()=>{
            reject(new Error("bad")); /* rejected */
        }, 1000);
    });
}

p().then(()=>{
    console.log('1000ms 후에 fulfilled 됩니다.');
})
.catch((error)=>{
    console.log('1000ms 후에 rejected 됩니다.', error);
})