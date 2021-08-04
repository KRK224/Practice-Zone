// 객체 생성 방법

//2.1 객체 리터럴

var emptyObject = {};
console.log(typeof emptyObject) // object

var person = {
    name: "Lee",
    gender: "Male",
    sayHello: function(){
        console.log("Hi! My name is " + this.name);
    }
};

console.log(typeof person) // object
console.log(person) // {name: "Lee", gender = "Male", sayHello: f}

person.sayHello();


//2.2 Object 생성자 함수

// 생성자 함수란?
/*
    new 키워드와 함께 객체를 생성하고 초기화하는 함수를 말한다. 생성자 함수를 통해 생성된 객체를 인스턴스
    (instance)라 한다.

    Object 외의 빌트인 생성자 함수 : String, Number, Boolean, Array, Date, RegExp

    생성자 함수에 없는 프로퍼티 키에 값을 할당하면, 자동으로 해당 객체에 프로퍼티를 추가하고 값을 할당한다.
*/

// Object 생성자 함수로 빈 객체 생성
var myPerson = new Object();

// 프로퍼티 추가 (동적 생성 - 사용자 생성자 함수도 동일)

myPerson.name = "Kim";
myPerson.gender = "Male";
myPerson.sayHello = function(){
    console.log("Hi, My name is " + this.name);
}

console.log(typeof myPerson); // object
console.log(myPerson) // {name: "Kim", gender: "Male", sayHello: f}

myPerson.sayHello(); // Hi, My name is Kim

/*
    *** 중요 ***
    사실 객체 리터럴 방식으로 생성된 객체는 결국 빌트인(Built-in) 함수인 Object 생성자 함수로 객체를 생성하는 
    것을 단순화시킨 축약 표현(short-hand)이다.

    다시 말해, 자바스크립트 엔진은 객체 리터럴로 객체를 생성하는 코드를 만나면 내부적으로 Object 생성자 함수를
    사용하여 객체를 생성한다.

*/



// 2.3 생성자 함수 (사용자가 정의함)

/*
    객체 리터럴 또는 Object 생성자 함수를 사용한 객체 생성은 동일한 프로퍼티 키를 가진 여러 개의 인스턴스
    생성에 불편함이 있다.(계속 반복하여 작성해야함) => 이럴거면 객체를 왜 쓰냐??!!!

    그래서 나온게 생성자 함수
*/


// 사용자 생성자 함수

function Person(name, gender) {
    this.name = name; // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.gender = gender;
    this.sayHello = function(){
        console.log("Hi, My name is " + this.name);
    }
}

var person1 = new Person("Lee", "Female");
var person2 = new Person("Kim", "Male");

console.log("person1: ", typeof person1);
console.log("person2: ", typeof person2);

/*
    여기서 주의할 점!!

    1. this 가 붙은 생성자 함수 내부의 프로퍼티와 메소드는 Public (외부에서 참조 가능)
       그 외의 일반 변수는 Private(외부 참조 불가능)하다. 하지만 생성자 함수 내부에서는 자유롭게 사용 가능.

    2. 자바스크립트의 생성자 함수는 자바와 같이 생성자 역할을 하는 독립된 형식이 아니다.
       단순히 함수에게 new를 붙이면 생성자 함수로 동작할 수 있음을 의미.

    3. new와 함께 함수를 호출하면 this 바인딩이 다르게 동작한다! => 생성자 호출 패턴 page 참조
*/

// 3 객체 프로퍼티 접근

// 3.1 프로퍼티 키 : 무조건 문자열로 반환되어 저장됨.

/*
    문자열로 유효한 이름의 경우 "" 를 생략 가능하지만, 유효하지 않은 이름의 경우 반드시 "" 사용.

*/

var person3 = {
    'first-name': "Chris",
    last_name: "Kim",
    gender = "Male",
    sayHello = function(){
        console.log("Hi, My name is" + this['first-name'] + " " + this.last_name);
    }
}

/*
    프로퍼티의 값에 접근하는 방법
    마침표(.) 표기법과 대괄호([]) 표기법이 있다.
*/

var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
    1: 10
  };
  
  console.log(person);
  
  console.log(person.first-name);    // NaN: undefined-undefined
  console.log(person[first-name]);   // ReferenceError: first is not defined
  console.log(person['first-name']); // 'Ung-mo'
  
  console.log(person.gender);    // 'male'
  console.log(person[gender]);   // ReferenceError: gender is not defined
  console.log(person['gender']); // 'male'
  
  console.log(person['1']); // 10
  console.log(person[1]);   // 10 : person[1] -> person['1']
//console.log(person.1);    // SyntaxError


/*
  이렇게 []를 사용할 경우, 반드시 프로퍼티 키는 문자열로 입력. (암묵적 타입변환 가능하긴 함.)
*/

// 3.3 프로퍼티 값 갱신

// 객체가 소유하고 있는 프로퍼티에 새로운 값을 할당하면 갱신됨.

// 3.4 프로퍼티 동적 생성

person['first-name'] = "Andrew";

// 3.5 프로퍼티 삭제

// delete 연산자를 사용하면 객체의 프로퍼티를 삭제함 (이때, 피연산자는 프로퍼티 키이어야 한다.)

var person = {
    'first-name': "Chris",
    'last-name': "Kim",
    gender: "Male",
    age: 29
}

delete person.age;
console.log(person.age) // undefined. (없는 프로퍼티 참조시)

delete person; // 객체를 삭제할 수 없으므로, 아무 일도 일어나지 않음.

// 3.6 for-in 문

// for in 문을 사용하면 객체(배열 포함)에 포함된 모든 프로퍼티에 대해 루프를 수행.


// prop에 객체의 프로퍼티 키가 문자열로 반환된다. 단, 순서는 보장되지 않는다.
for (var prop in person){
    console.log(prop + ": " + person[prop]);
}

var array = ['one', "two"];

// index에 배열의 경우 인덱스가 반환된다. 순서 보장.

for(var idx in array){
    console.log(array[idx]);
}


/*
    for in은 객체의 모든 프로퍼티 키를 순회하기 위한 문법!
    배열에 사용하는 경우, 다른 프로퍼티가 있을 경우에는 다른 프로퍼티도 반환!!!!

    따라서, 배열에는 for of를 사용하자.
*/

// 배열 요소들만을 순회하지 않는다.

var array = ["one", "two"];
array.name = "test array"; // array 객체에 name 프로퍼티 추가

for (var prop in array){
    console.log(prop + ": " + array[prop]);
}

/*
0: one
1: two
name: test array
*/

// 배열에 for of 사용 => 나중에 배열에서 더 자세히!

const array = [1,2,3];
array.name = "for of array";

for (const value of array){
    console.log(value);
}

/*
1
2
3
*/

for(const [index, value] of array.entries()){
    console.log(index, value);
}

/*
0 1
1 2
2 3
*/



// 4. Pass-by-reference

/*
 * object type을 객체 타입 또는 참조 타입이라 한다. 참조 타입이란 객체의 모든 연산이 실제 값이 아닌
 * 참조값으로 처리됨을 의미한다.
 * 원시 타입은 값이 한번 정해지면 변경할 수 없지만 (불변성 immutable), 객체는 프로퍼티를 변경, 추가 삭제가
 * 가능하므로, 변경 가능(mutable)한 값이라 할 수 있다.
 *  
 * 따라서 객체 타입은 동적으로 변화할 수 있으므로 어느 정도의 메모리 공간을 확보해야 하는지 예측할 수 없기
 * 때문에 런타임에 메모리 공간을 확보하고 메모리의 힙 영역(Heap Segment)에 저장된다.
 */

// pass-by-reference

var foo = {
    val: 10
}

var bar = foo;

console.log(foo.val, bar.val); // 10 10
console.log(foo === bar); // true

bar.val = 20;

console.log(foo.val, bar.val) // 20 20
console.log(foo === bar) // true



// 5. pass-by-value

/**
 * 원시 타입은 값(value)으로 전달된다. 즉, 값이 복사되어 전달된다. 이를 pass-by-value(값에 의한 전달)
 * 이라 한다. 원시 타입은 값이 한번 정해지면 변경할 수 없다.(immutable).
 * 
 * 또한 이들 값은 런타임(변수 할당 시점)에 메모리의 스택 영역에 고정된 메모리 영역을 점유하고 저장된다.
 * 
 * => 아무튼 다 런타임에 메모리에 올라가네... C/C++은 아님.
 */


