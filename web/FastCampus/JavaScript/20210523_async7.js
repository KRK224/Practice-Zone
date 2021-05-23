//  async function 에서 return 되는 값은
//  Promise.resolve 함수로 감싸서 리턴된다.

function p(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           // resolve(ms);
           reject(new Error("reason"));
        }, ms);
    });
}

async function asyncP(){
    const ms = await p(1000); // 여기서 throw 해서 main의 catch로 넘어감.
    // 만약 여기서 try catch구문을 작성하면 main의 catch로 넘어가지 않고 여기서 에러 핸들링함.
    return "Mark: " + ms;
}

(async function main(){
    try {
        const name = await asyncP(); // Promise.resolve(asyncP()) => Promise.resolve("Mark");
        console.log(name);
    }
    catch (error){
        console.log(error);
    } finally{
        console.log("end");
    }
})();