// JavaScript는 하나의 숫자 타입만 존재

// 숫자 타입의 값은 배정밀도 64비트 부동소수점 형 : -(2^53-1) ~ 2^53-1 사이의 값을 따른다.

var integer = 10;
var douvle = 10.12;
var negative = -20;
var binary = 0b010001;
var octal = 0o101;
var hex = 0x41;

// 2진수, 8진수, 16진수 리터럴은 메모리에 동일한 배정밀도 64비트 부동소수점 현식의 2진수로 저장된다.
// JS는 2진수, 8진수, 16진수 데이터 타입을 제공하지 않아 참조하면 모두 10진수로 해석.

console.log(binary);    //65
console.log(octal); // 65
console.log(hex);   // 65

// 표기법만 다를 뿐 같은 값이다.
console.log(binary === octal); // true
console.log(octal === hex);     // true

// Infinity: 양의 무한대
// -Infinity: 음의 무한대
// NaN: 산술 연산 불가 (not-a-number)

// 1.1.2 string

// 문자열은 원시 타입이며 변경 불가능(immuteable)하다. 한번 생성되면 변경할 수 없다.

var str = "Hello";
str = "world";

/*
    첫번째 구문이 실행되면 메모리에 문자열 "Hello"가 생성되고 식별자 str은 메모리에 생성된 문자열 "Hello"
    의 메모리 주소를 가리킨다.
    그리고 두번째 구문이 실행되면 이전에 생성된 문자열 ‘Hello’을 수정하는 것이 아니라 새로운 문자열 ‘world’를
     메모리에 생성하고 식별자 str은 이것을 가리킨다. 이때 문자열 ‘Hello’와 ‘world’는 모두 메모리에 존재하고 
     있다. 변수 str은 문자열 ‘Hello’를 가리키고 있다가 문자열 ‘world’를 가리키도록 변경되었을 뿐이다.
*/

// ------------------------------------- 유사 배열 --------------------

for (var i = 0; i <str.length; i++){
    console.log(str[i]);
}

// 문자열을 변경할 수 없다.=> 원시 타입

str[0] = "S";
console.log(str); // Hello

/*
    문자열은 배열처럼 인덱스를 통해 접근할 수 있다. 이와 같은 특성을 갖는 데이터를 유사 배열이라 한다.

    str[0] = "S" 처럼 이미 생성된 문자열의 일부를 변경해도 반영되지 않음(변경 불가능 Immutable)
    에러는 발생하지 않음.
*/

// 그러나 새로운 문자열을 재할당하는 것은 가능 => 이는 기존 문자열을 변경하는 것이 아니라 새로운 문자열을
// 새롭게 할당하는 것.

var str2 = "string";
console.log(str2); // string

str2 = "String";
console.log(str2); // String

str2 += " test";
console.log(str2); // String test

str2 = str2.substring(0,3);
console.log(str2); // Str

str2 = str2.toUpperCase();
console.log(str2); // STR


// ---------------------------1.1.4 undefined ----------------

/* 
    변수 선언시에 확보된 메모리 공간을 초기값으로 할당하지 않으면, javascript 엔진이 undefined로 초기화함.
    선언하지 않은 변수 호출 시에는 ReferenceError 발생.
*/

//  -------------------1.1.5 null -----------------------

/*
    null 타입의 값은 null이 유일하다. 자바스크립트는 대소문자를 구별(case-sensitive)하므로 null은 Null, NULL등과 다르다.

    프로그래밍 언어에서 null은 의도적으로 변수에 값이 없다는 것을 명시할 때 사용한다. 이는 변수가 기억하는 메모리 어드레스의 참조 정보를 제거하는 것을 의미
    자바스크립트 엔진은 누구도 참조하지 않는 메모리 영역에 대해 가비지 콜렉션을 수행.
*/

var foo = "Lee";
foo = null; // 참조 정보가 제거됨


// null 은 typeof 연산자를 사용하면 object를 반환한다. => 설계상의 오류
// foo === null 비교 연산자를 이용하여 판단.

// 변수 에서 기억할 것

var cost = 200,
    person = 3,
    value = 20;

// 이렇게 한번에 선언 가능. 마지막은 ;세미콜론 꼭 찍기.

// 변수의 중복 선언이 가능한 대신, 기존의 변수값을 잃어버림.

var x = 20;

var x = 100; // 20값 손실.

// 2.3 변수의 호이스팅


// 중요한 것

/*
    NaN은 자기 자신과 일치하지 않는 유일한 값이다. 따라서 숫자가 NaN인지 조사하려면 빌트인 함수 isNaN을 사용한다.
*/

isNaN(NaN) // true


// ===========================================================================
// 강제적 타입 변환

// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 => 문자열 타입
console.log(String(1));        // "1"
console.log(String(NaN));      // "NaN"
console.log(String(Infinity)); // "Infinity"
// 불리언 타입 => 문자열 타입
console.log(String(true));     // "true"
console.log(String(false));    // "false"

// 2. Object.prototype.toString 메소드를 사용하는 방법
// 숫자 타입 => 문자열 타입
console.log((1).toString());        // "1"
console.log((NaN).toString());      // "NaN"
console.log((Infinity).toString()); // "Infinity"
// 불리언 타입 => 문자열 타입
console.log((true).toString());     // "true"
console.log((false).toString());    // "false"

// 3. 문자열 연결 연산자를 이용하는 방법
// 숫자 타입 => 문자열 타입
console.log(1 + '');        // "1"
console.log(NaN + '');      // "NaN"
console.log(Infinity + ''); // "Infinity"
// 불리언 타입 => 문자열 타입
console.log(true + '');     // "true"
console.log(false + '');    // "false"


// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 숫자 타입
console.log(Number('0'));     // 0
console.log(Number('-1'));    // -1
console.log(Number('10.53')); // 10.53
// 불리언 타입 => 숫자 타입
console.log(Number(true));    // 1
console.log(Number(false));   // 0

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
// 문자열 타입 => 숫자 타입
console.log(parseInt('0'));       // 0
console.log(parseInt('-1'));      // -1
console.log(parseFloat('10.53')); // 10.53

// 3. + 단항 연결 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
console.log(+'0');     // 0
console.log(+'-1');    // -1
console.log(+'10.53'); // 10.53
// 불리언 타입 => 숫자 타입
console.log(+true);    // 1
console.log(+false);   // 0

// 4. * 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
console.log('0' * 1);     // 0
console.log('-1' * 1);    // -1
console.log('10.53' * 1); // 10.53
// 불리언 타입 => 숫자 타입
console.log(true * 1);    // 1
console.log(false * 1);   // 0


// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 불리언 타입
console.log(Boolean('x'));       // true
console.log(Boolean(''));        // false
console.log(Boolean('false'));   // true
// 숫자 타입 => 불리언 타입
console.log(Boolean(0));         // false
console.log(Boolean(1));         // true
console.log(Boolean(NaN));       // false
console.log(Boolean(Infinity));  // true
// null 타입 => 불리언 타입
console.log(Boolean(null));      // false
// undefined 타입 => 불리언 타 입
console.log(Boolean(undefined)); // false
// 객체 타입 => 불리언 타입
console.log(Boolean({}));        // true
console.log(Boolean([]));        // true

// 2. ! 부정 논리 연산자를 두번 사용하는 방법
// 문자열 타입 => 불리언 타입
console.log(!!'x');       // true
console.log(!!'');        // false
console.log(!!'false');   // true
// 숫자 타입 => 불리언 타입
console.log(!!0);         // false
console.log(!!1);         // true
console.log(!!NaN);       // false
console.log(!!Infinity);  // true
// null 타입 => 불리언 타입
console.log(!!null);      // false
// undefined 타입 => 불리언 타입
console.log(!!undefined); // false
// 객체 타입 => 불리언 타입
console.log(!!{});        // true
console.log(!![]);        // true