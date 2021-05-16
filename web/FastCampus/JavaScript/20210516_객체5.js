// 객체 리터럴

const a = {};

console.log(a, typeof a);

const b ={
    name: "Mark"
};

console.log(b, typeof b);

const c = {
    name: "Mark",
    hello1() {
        console.log('hello1,', this);
    },
    hello2: function(){
        console.log("hello2,", this);
    },
    // 화살표 함수는 this를 사용할 수 없다.
    hello3: () => console.log("hello3,", this),

}

c.hello1();
c.hello2();
c.hello3(); // result : hello3, {} 빈객체 반환.

