/* 
    p 라는 프로미스 객체가 fulfilled 되는 시점에 p.then 안에 설정한 callback 함수가 실행됩니다.
*/



const p = new Promise((resolve, rejected)=>{

    /* pending */

    setTimeout(()=>{
        resolve(); /*fulfilled*/
    }, 1000);
});

p.then(()=>{
    // p의 상태가 fulfilled가 될 때, then이라는 callback 함수가 실행된다.
})