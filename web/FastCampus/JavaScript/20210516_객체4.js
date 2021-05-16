/* 
    20.3 객체 C

        프로토타입을 이용한 객체 확장.
*/

// prototype 상속

function Person(){}

Person.prototype.hello = function(){
    console.log('Hello');
}

function Korean(region) {
    this.region = region;
    this.where = function(){
        console.log('Where', this.region);
    }
}

// Prototype을 상속? 연결? 아무튼 쓸 수 있다.

Korean.prototype = Person.prototype;

const k = new Korean('Seoul');

k.hello();
k.where();

/*
const p = new Person;
p.where();

==> Korean의 where 함수는 prototype이 아니기 때문에 error 발생.
*/


// 다 true로 나옴.
console.log(k instanceof Korean);
console.log(k instanceof Person); // 프로토타입을 연결하면 상속개념처럼 instance로 인식.
console.log(k instanceof Object);

