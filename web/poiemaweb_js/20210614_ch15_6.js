// 중첩 스코프 : 가장 인접한 지역을 우선 참조한다.



var foo = function ( ) {

    var a = 3, b = 5;
  
    var bar = function ( ) {
      var b = 7, c = 11;
  
  // 이 시점에서 a는 3, b는 7, c는 11
  
      a += b + c;
  
  // 이 시점에서 a는 21, b는 7, c는 11
  
    };
  
  // 이 시점에서 a는 3, b는 5, c는 not defined
  
    bar( );
  
  // 이 시점에서 a는 21, b는 5
  
  };

  // 7. 렉시컬 스코프

  var x = 1;

  function foo() {
      var x = 10;
      bar(); // 함수 호이스팅 발생.
  }

  function bar(){ 
      console.log(x); 
  }

  foo(); // ?
  bar(); // ?

  // 함수 bar의 상위 스코프에 따라 x 값이 결정된다.
  // 동적 스코프는 함수의 호출 위치에 따라 스코프가 결정, 렉시컬 스코프는 호출과 관계없이 선언 위치에 따라
  // 결정.