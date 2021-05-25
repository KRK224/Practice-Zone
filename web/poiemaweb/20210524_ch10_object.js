// 생성자 함수
function Person(name, gender) {
    this.name = name;
    this.gender = gender;
    this.sayHello = function(){
      console.log('Hi! My name is ' + this.name);
    };
  }
  
  // 인스턴스의 생성
  var person1 = new Person('Lee', 'male');
  var person2 = new Person('Kim', 'female');
  
  console.log('person1: ', typeof person1);
  console.log('person2: ', typeof person2);
  console.log('person1: ', person1);
  console.log('person2: ', person2);
  
  person1.sayHello();
  person2.sayHello();


// 생성자 함수 내의 일반 변수와 this에 바인딩 된 프로퍼티 및 메소드의 public/private 유무!!!


  function Person(name, gender) {
    var married = true;         // private
    this.name = name;           // public
    this.gender = gender;       // public
    this.sayHello = function(){ // public
      console.log('Hi! My name is ' + this.name);
    };
  }
  
  var person = new Person('Lee', 'male');
  
  console.log(typeof person); // object
  console.log(person); // Person { name: 'Lee', gender: 'male', sayHello: [Function] }
  
  console.log(person.gender);  // 'male'
  console.log(person.married); // undefined

  /*
   자바스크립트의 생성자 함수는 이름 그대로 객체를 생성하는 함수이다. 하지만 자바와 같은 클래스 기반 객체지향 언어의 생성자(constructor)와는 다르게 그 형식이 정해져 있는 것이 아니라 
   기존 함수와 동일한 방법으로 생성자 함수를 선언하고 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작한다.
   */


   // 표현식을 프로퍼티 키로 사용하기.

   /*
   var person = {
    [first+name]: 'Ung-mo', // ReferenceError: first is not defined
  };
*/
  // first, name 변수를 찾아 연산 후 프로퍼티 키 할당.


  //for in 사용 시 주의사항, 프로퍼티 키를 순환하기 위해 만들어졌으며, 순서를 보장하지 않음.

  // 배열 또한 객체이기 때문에 사용가능하지만, 순서를 보장하지 않고, 다른 프로퍼티를 반환하므로 "for of"  사용을 권장


  var a = ["one", "two", "three"];

  for (var index in a){
      console.log(`array[${index}] = ${a[index]}`);
  }
