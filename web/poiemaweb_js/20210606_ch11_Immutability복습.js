// 2.1 Object.assign
/**
 * Syntax
 * Object.assign(target, ... sources)
 * 
 */

const obj = {a:1};
const copy = Object.assign({}, obj);

console.log(copy); // {a:1}
console.log(copy === obj) // false

// Merge

const o1 = {a:1};
const o2 = {b:2};
const o3 = {c:3};

const merge1 = Object.assign(o1,o2,o3);
console.log(merge1); // {a:1, b:2, c:3}
console.log(o1); // {a:1, b:2, c:3}

const o4 = {d:4};
const o5 = {e:5};
const o6 = {f:6};

const merge2 = Object.assign({}, o4, o5, o6);

console.log(merge2); // {d:4, e:5, f:6};
console.log(o4); // {d:4};

/*
 * Object.assign을 사용하여 기존 객체를 변경하지 않고 객체를 복사하여 사용할 수 있다. 
 * 
 * Object.assign은 완전한 deep copy를 지원하지 않는다. 객체 내부의 객체(Nested Object)는 Shallow copy 된다.
 * 
 */

const user1 = {
    name: "Lee",
    address: {
        city: "Seoul"
    }
};

const user2 = Object.assign(user1);
console.log(user2);

console.log(user1 === user2); // false

user2.name = "Kim";
console.log(user1.name);
console.log(user2.name);


// 객체 내부의 객체 (Nested Object)는 Shallow copy 된다.
console.log(user1.address === user2.address); // true

user1.address.city = "Busan";

console.log(user1.address.city); // Busan
console.log(user2.address.city); // Busan


// 2.2 Object.freeze

/*
    Object.freeze()를 사용하면 불변(Immuatble) 객체로 만들 수 있다.
*/

const user1 = {
    name: "Lee",
    address: {
        city: "Suwon"
    }
};

const user2 = Object.assign({}, user1, {name: "Kim"});

// 이때, {name: "Kim"} 객체가 마지막에 적용됨.

console.log(user1.name); // Lee
console.log(user2.name); // Kim

Object.freeze(user1);
user1.name = "Kim"; // 무시된다!!

console.log(user1.name) // Lee

console.log(Object.isFrozen(user1));; //isFrozen으로 freeze 여부를 알 수 있다. true


// 하지만, Object.freeze()도 Nested Object에는 적용 안됨 => 변경됨.

const user = {
    name:"Kim",
    address: {
        city: "Seoul"
    }
};

Object.freeze(user);

user.address.city = "Busan";

console.log(user); // {name: "Kim", address :{city: "Busan"}}


/*
    내부 객체까지 변경 불가능하게 만들려면 Deep freeze를 해야한다.
*/


function deepFreeze(obj) {
    const props = Object.getOwnPropertyNames(obj);
  
    props.forEach((name) => {
      const prop = obj[name];
      if(typeof prop === 'object' && prop !== null) {
        deepFreeze(prop);
      }
    });
    return Object.freeze(obj);
  }
  
  const user = {
    name: 'Lee',
    address: {
      city: 'Seoul'
    }
  };
  
  deepFreeze(user);
  
  user.name = 'Kim';           // 무시된다
  user.address.city = 'Busan'; // 무시된다
  
  console.log(user); // { name: 'Lee', address: { city: 'Seoul' } }

//  2.3 Immutable.js

/**
 * Object.assign과 Object.freeze을 사용하여 불변 객체를 만드는 방법은 번거러울 뿐더러 성능상 이슈가 있어,
 * 큰 객체에는 사용하지 않는 것이 좋다.
 * 
 * 또 다른 대안으로 Facebook이 제공하는 Immutable.js를 사용하는 방법이 있다.
 * 
 * Immutable.js는 List, Stack, Map, OrderedMap, Set, OrderedSet, Record와 같은 영구 불변 데이터 구조 제공
 * 
 */

