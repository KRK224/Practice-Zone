// 생성자 함수를 이용하여 새로운 객체를 만드는 방법.

//함수를 통한 생성자 만들기.
function Person(name, age) {
    console.log(this);
    this.name = name; // 객체의 속성으로 인자를 저장.
    this.age = age;
}

const p = new Person('Mark', 37);

console.log(p, p.name, p.age);

const a = new Person('Anna', 26);

console.log(a, a.name, a.age);


// 화살표 함수는 this를 사용할 수 없다.
// 생성자를 사용한 모든 함수는 function(표준 내장 객체) keyword를 사용하여 생성한다.
const Cat = (name, age) => {
    console.log(this);
    this.name = name;
    this.age = age;
}

const c = new Cat('냥이', 1); // error 발생!




