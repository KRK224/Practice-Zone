// 1 일반 함수에서 this는 전역 객체

// 1-2 내부 함수가 어디에 있든 항상 global 객체에 바인딩

var value = 1;

var obj = {
    value: 100,
    foo: function(){
        var that = this; // Workaround : this  === obj // call by value 인듯?
        console.log("foo's this: ", this);
        console.log("foo's this.value: ", this.value);

        function bar(){
            console.log("bar's this ", this); // global
            console.log("bar's this.value: ", this.value); // 1

            console.log("bar  안에서 that 사용 ", that); //obj
            console.log("bar 안에서 that.value 호출 ", that.value); // 100
        }
    bar();
    }
};

obj.foo();

/**
 * 2. 메소드 호출
 * 
 * 함수가 객체의 프로퍼티 값이면 메소드로서 호출된다.
 * 이때 메소드 내부의 this는 해당 메소드를 호출한 객체에 바인딩된다.
 * 
 */


var obj1 = {
    name: "Lee",
    sayName: function(){
        console.log(this.name);
    }
};

var obj2 = {
    name: "Kim"
};

obj2.sayName = obj1.sayName;

obj1.sayName(); // "Lee"
obj2.sayName(); // "Kim"


// 프로토타입 객체의 메소드에서 this가 동작하는 방법

function Person(name) {
    this.name = name;
}

Person.prototype.getName = function(){
    return this.name;
}

var me = new Person("Lee");
console.log(me.getName()); // "Lee"

Person.prototype.name = "Kim";
console.log(Person.prototype.getName()); // Kim


// 생성자 함수에서의 this

function Animal(name) {
    this.name = name;

    // return this
}

var pet = new Animal("puppy");
console.log(pet.name);


// 5-17.4 Apply/call/bind


