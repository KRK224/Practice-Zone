// typeof 연산자

typeof '';              // string
typeof 1;               // number
typeof NaN;             // number
typeof true;            // boolean
typeof [];              // object
typeof {};              // object
typeof new String();    // object
typeof new Date();      // object
typeof /test/gi;        // object
typeof function () {};  // function
typeof undefined;       // undefined
typeof null;            // object (설계적 결함)
typeof undeclared;      // undefined (설계적 결함)

// 하지만 정확한 object 타입을 알 수 없다.

// 2. Object.prototype.toString

var obj = new Object();
obj.toString(); // [object Object]

var num = 1;

console.log(num.toString());

// toString은 객체가 아닌 다른 타입은 알 수 없다
// 2-2. Function.prototype.call 메소드를 사용하여 모든 타입의 값을 알아낼 수 있다.

Object.prototype.toString.call('');             // [object String]
Object.prototype.toString.call(new String());   // [object String]
Object.prototype.toString.call(1);              // [object Number]
Object.prototype.toString.call(new Number());   // [object Number]
Object.prototype.toString.call(NaN);            // [object Number]
Object.prototype.toString.call(Infinity);       // [object Number]
Object.prototype.toString.call(true);           // [object Boolean]
Object.prototype.toString.call(undefined);      // [object Undefined]
Object.prototype.toString.call();               // [object Undefined]
Object.prototype.toString.call(null);           // [object Null]
Object.prototype.toString.call([]);             // [object Array]
Object.prototype.toString.call({});             // [object Object]
Object.prototype.toString.call(new Date());     // [object Date]
Object.prototype.toString.call(Math);           // [object Math]
Object.prototype.toString.call(/test/i);        // [object RegExp]
Object.prototype.toString.call(function () {}); // [object Function]
Object.prototype.toString.call(document);       // [object HTMLDocument]
Object.prototype.toString.call(argument);       // [object Arguments]
Object.prototype.toString.call(undeclared);     // ReferenceError


// 3. instanceof 객체의 상속 관계를 체크

function Person() {}
const person = new Person();

console.log(person instanceof Person); // true
console.log(person instanceof Object); // true

// 여기서 instanceof의 우항은 constructor를 의미하고, 프로토타입 체인에 존재하는 모든 constructor를 검색하여
// 일치하는 것이 있다면 true 반환.

// 4. 배열 체크 + 유사 배열 체크(length 프로퍼티를 이용)

console.log(Array.isArray([]));    // true
console.log(Array.isArray({}));    // false
console.log(Array.isArray('123')); // false

// 4-2. 유사배열 문자열, arguments, HTMLCollection, NodeList 등은 length 프로퍼티가 있다.

console.log(undefined == null)
    const isArrayLike = function (collection) {
      // 배열 인덱스: 32bit 정수(2의 32제곱 - 1)
      // 유사 배열 인덱스: 자바스크립트로 표현할 수 있는 양의 정수(2의 53제곱 - 1)
      const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
      // 빈문자열은 유사배열이다. undefined == null => true
      const length = collection == null ? undefined : collection.length;
      return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
    };

    // true
    console.log(isArrayLike([]));
    console.log(isArrayLike('abc'));
    console.log(isArrayLike(''));
    console.log(isArrayLike(document.querySelectorAll('li')));
    console.log(isArrayLike(document.getElementsByName('li')));
    console.log(isArrayLike({ length: 0 }));
    (function () {
      console.log(isArrayLike(arguments));
    }());

    // false
    console.log(isArrayLike(123));
    console.log(isArrayLike(document.querySelector('li')));
    console.log(isArrayLike({ foo: 1 }));
    console.log(isArrayLike());
    console.log(isArrayLike(null));