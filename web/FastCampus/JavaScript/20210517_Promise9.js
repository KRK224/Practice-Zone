/*
    executor 의 reject 함수를 실행할 때 인자를 넣어 실행하면, catch의 callback 함수의 인자로 받을 수 있다.
    reject("error");
    catch((reason) =>{...})
*/


function p(){
    return new Promise((resolve, reject)=>{
        /* pending */
        setTimeout(()=>{
            reject("error"); /* rejected */
        }, 1000);
    });
}

p().then(()=>{
    console.log('1000ms 후에 fulfilled 됩니다.');
})
.catch((reason)=>{
    console.log('1000ms 후에 rejected 됩니다.', reason);
})